import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import { ethers } from "ethers";
import axios from "axios";
import config from "./config";
import Navbar from "./Components/Navbar";
import useAuthentication from "./Hooks/useAuthentication";

function App() {

  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
