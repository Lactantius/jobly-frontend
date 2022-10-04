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

  const setUserAndStorage = (user: User | null) => {
    setUser(user);
    const stringified = user ? JSON.stringify(user) : "";
    window.localStorage.setItem("user", stringified);
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
    const userData = await JoblyApi.getUserInfo({
      username: signupData.username,
      token: authToken.token,
    });
    setTokenAndStorage(authToken.token);
    setUserAndStorage(userData);
    return userToken;
  };

  const logout = () => {
    setTokenAndStorage("");
    setUserAndStorage(null);
  };

  const updateUser = async (userData: ProfileFormVals) => {
    if (userToken) {
      const res = await JoblyApi.updateUser(userData, userToken);
      setUserAndStorage(res);
    }
  };

  return (
    <BrowserRouter>
      <NavBar user={getUser()} logout={logout} />
      <Router
        user={user}
        login={login}
        register={register}
        updateUser={updateUser}
      />
    </BrowserRouter>
  );
}

export default App;
