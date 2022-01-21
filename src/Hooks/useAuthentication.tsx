import { ethers } from "ethers";
import axios from "axios";
import config from "../config";
import { useEffect, useState } from "react";

export default function useAuthentication(): {
  provider: ethers.providers.Web3Provider;
  signer: ethers.providers.JsonRpcSigner;
  authenticate: () => void;
  logout: () => void;
  isAuthenticated: boolean;
} {
  if ((window as any).ethereum) {
    if (!(window as any).ethereum?.enabled) {
      (window as any).ethereum.enable();
    }
  } else {
    throw "Please use a browser with Metamask";
  }

  let provider: ethers.providers.Web3Provider =
    new ethers.providers.Web3Provider((window as any).ethereum);
  let signer: ethers.providers.JsonRpcSigner = provider.getSigner();
  let [authenticated, setAuthenticated] = useState<boolean>(false);

  const authenticate = async () => {
    // const address = await signer.signMessage("Hello World");
    const address = await signer?.getAddress();

    const response = await axios.post(
      config.API_BASE + `login/challenge/${address}`
    );

    const { id, challenge } = response.data;

    const signedData = await signer?.signMessage(challenge);

    const challengeResponse = {
      challenge: {
        id,
        challenge,
      },
      signature: signedData,
      address,
    };

    const authData = await axios.post(
      config.API_BASE + `login/response`,
      challengeResponse
    );

    const { expires, token } = authData?.data;

    localStorage.setItem("expires", expires);
    localStorage.setItem("token", token);
    checkStatus();
  };

  const logout = () => {
    localStorage.removeItem("expires");
    localStorage.removeItem("token");
    checkStatus();
  };

  useEffect(() => {
    checkStatus();
  }, []);

  const checkStatus = () => {
    const expires = localStorage.getItem("expires");
    const token = localStorage.getItem("token");

    if (expires && new Date(expires) > new Date()) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  };

  return {
    provider,
    signer,
    authenticate,
    isAuthenticated: authenticated,
    logout,
  };
}
