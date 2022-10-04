import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import jwt from "jsonwebtoken";

import NavBar from "./NavBar";
import "./App.css";

import Router from "./Router";
import JoblyApi from "./api";

function App(): JSX.Element {
  //const [getToken, setToken] = useLocalStorage("token", {} as UserToken);
  const [userToken, setUserToken] = useState(() => {
    return window.localStorage.getItem("token");
  });

  const setToken = (token: string) => {
    setUserToken(token);
    window.localStorage.setItem("token", token);
  };

  const getUser = () => {
    return userToken ? (jwt.decode(userToken) as UserToken) : null;
  };

  const login = async (loginData: LoginFormVals) => {
    const authToken = await JoblyApi.login(loginData);
    setToken(authToken.token);
    console.log("token: ", userToken);
    return userToken;
  };

  const register = async (signupData: SignupFormVals) => {
    const authToken = await JoblyApi.register(signupData);
    setToken(authToken.token);
    return userToken;
  };

  const logout = () => setToken("");

  return (
    <BrowserRouter>
      <NavBar user={getUser()} logout={logout} />
      <Router login={login} register={register} user={getUser()} />
    </BrowserRouter>
  );
}

export default App;
