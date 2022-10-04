import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import jwt from "jsonwebtoken";

import NavBar from "./NavBar";
import "./App.css";

import Router from "./Router";
import JoblyApi from "./api";

function App(): JSX.Element {
  const [userToken, setUserToken] = useState(() =>
    window.localStorage.getItem("token")
  );

  const [user, setUser] = useState(() => {
    const stored = window.localStorage.getItem("user");
    return stored ? (JSON.parse(stored) as User) : null;
  });

  const setTokenAndStorage = (token: string) => {
    setUserToken(token);
    window.localStorage.setItem("token", token);
  };

  const setUserAndStorage = (user: User) => {
    setUser(user);
    window.localStorage.setItem("user", JSON.stringify(user));
  };

  const getUser = () => {
    return userToken ? (jwt.decode(userToken) as UserToken) : null;
  };

  const login = async (loginData: LoginFormVals) => {
    const authToken = await JoblyApi.login(loginData);
    const userData = await JoblyApi.getUserInfo({
      username: loginData.username,
      token: authToken.token,
    });
    setTokenAndStorage(authToken.token);
    setUserAndStorage(userData);
  };

  const register = async (signupData: SignupFormVals) => {
    const authToken = await JoblyApi.register(signupData);
    setTokenAndStorage(authToken.token);
    return userToken;
  };

  const logout = () => {
    setTokenAndStorage("");
    setUserAndStorage({} as User);
  };

  return (
    <BrowserRouter>
      <NavBar user={getUser()} logout={logout} />
      <Router login={login} register={register} user={user} />
    </BrowserRouter>
  );
}

export default App;
