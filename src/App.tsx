import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import { ethers } from "ethers";
import axios from "axios";

function App() {
  if ((window as any).ethereum) {
    const provider = new ethers.providers.Web3Provider(
      (window as any).ethereum
    );

    const signer = provider.getSigner();
  }

  const getChallenge = () => {
    axios.get('')
  }

  return (
    <div className="App">
      <button>Login</button>
    </div>
  );
}

export default App;
