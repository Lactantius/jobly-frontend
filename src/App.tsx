import React from "react";
import { BrowserRouter } from "react-router-dom";
import jwt from "jsonwebtoken";

import NavBar from "./NavBar";
import { useLocalStorage } from "./hooks";
import "./App.css";

import Router from "./Router";
import JoblyApi from "./api";

function App(): JSX.Element {
  const [token, setToken] = useLocalStorage("token", {} as User);

  const login = async (username: string, password: string) => {
    const authToken = await JoblyApi.login(username, password);
    setToken(authToken);
  };

  const register = async (signupData: SignupFormVals) => {
    const authToken = await JoblyApi.register(signupData);
    setToken(authToken);
    return token as User;
  };

  const logout = () => setToken({});

  const getUser = () => {
    const payload = jwt.decode(token);
    if (typeof payload === "string") return JSON.parse(payload) as User;
    return null;
  };

  return (
    <BrowserRouter>
      <NavBar user={getUser()} />
      <Router login={login} register={register} user={getUser()} />
    </BrowserRouter>
  );
}

export default App;
