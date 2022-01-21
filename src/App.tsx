import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import { ethers } from "ethers";
import axios from "axios";
import config from "./config";

function App() {
  let provider: ethers.providers.Web3Provider,
    signer: ethers.providers.JsonRpcSigner;

  if ((window as any).ethereum) {
    if (!(window as any).ethereum?.enabled) {
      (window as any).ethereum.enable();
    }
    provider = new ethers.providers.Web3Provider((window as any).ethereum);

    signer = provider.getSigner();
  }

  const getChallenge = async () => {
    // const address = await signer.signMessage("Hello World");
    const address = await signer.getAddress();

    const response = await axios.post(
      config.API_BASE + `login/challenge/${address}`
    );

    const { id, challenge } = response.data;

    const signedData = await signer.signMessage(challenge);

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
  };

  let expires = localStorage.getItem("expires");
  let token = localStorage.getItem("token");

  useEffect(() => {
    if (expires && new Date(expires) > new Date()) {
      console.log("currently Authenticated");
    }
  }, [expires, token]);

  useEffect(() => {})

  return (
    <div className="App">
      <button onClick={getChallenge}>Login</button>
    </div>
  );
}

export default App;
