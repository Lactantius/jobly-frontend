import React from "react";
import { BrowserRouter } from "react-router-dom";
import jwt from "jsonwebtoken";

import NavBar from "./NavBar";
import { useLocalStorage } from "./hooks";
import "./App.css";

import Router from "./Router";
import JoblyApi from "./api";

function App(): JSX.Element {
  const [token, setToken] = useLocalStorage("token", {});

  const login = async (username: string, password: string) => {
    const authToken = await JoblyApi.login(username, password);
    setToken(authToken);
  };

  const register = async (
    username: string,
    password: string,
    firstName: string,
    lastName: string,
    email: string
  ) => {
    const authToken = await JoblyApi.register(
      username,
      password,
      firstName,
      lastName,
      email
    );
    setToken(authToken);
  };

  const logout = () => setToken({});

  const getUser = () => jwt.decode(token);

  return (
    <BrowserRouter>
      <NavBar user={getUser()} />
      <Router />
    </BrowserRouter>
  );
}

export default App;
