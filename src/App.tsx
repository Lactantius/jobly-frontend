import React from "react";
import { BrowserRouter } from "react-router-dom";

import "./App.css";

import Router from "./Router";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
