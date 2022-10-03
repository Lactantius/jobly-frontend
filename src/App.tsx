import React from "react";
import { BrowserRouter } from "react-router-dom";

import NavBar from "./NavBar";
import "./App.css";

import Router from "./Router";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <NavBar />
      <Router />
    </BrowserRouter>
  );
}

export default App;
