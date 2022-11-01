import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import "./Login.css";

interface LoginProps {
  user: User | null;
  login: Function;
}

function Login({ user, login }: LoginProps): JSX.Element {
  const [formData, setFormData] = useState({} as LoginFormVals);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const res = login(formData);
    console.log(res);
    res.then((user: User | null) => {
      if (user && Object.keys(user).length > 0) {
        navigate("/");
      }
    });
  };

  const handleChange = (e: React.ChangeEvent) => {
    const { name, value } = e.target as HTMLInputElement;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  };

  if (user) return <Navigate to="/" />;
  return (
    <div className="Login">
      <h1>Login</h1>
      <form className="Login-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            onChange={handleChange}
            placeholder="username"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
            placeholder="password"
          />
        </div>
        <button onSubmit={handleSubmit}>Log in</button>
      </form>
    </div>
  );
}

export default Login;
