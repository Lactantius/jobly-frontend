import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface LoginProps {
  user: UserToken | null;
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
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="username"
        name="username"
        onChange={handleChange}
        placeholder="username"
      />
      <input
        type="password"
        id="password"
        name="password"
        onChange={handleChange}
        placeholder="password"
      />
      <button>Log in</button>
    </form>
  );
}

export default Login;
