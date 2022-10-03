import React from "react";
import { BrowserRouter } from "react-router-dom";

import NavBar from "./NavBar";
import { useLocalStorage } from "./hooks";
import "./App.css";

import Router from "./Router";

function App(): JSX.Element {
  const [token, getToken] = useLocalStorage("");

  return (
    <BrowserRouter>
      <NavBar />
      <Router />
    </BrowserRouter>
  );
}

export default App;
