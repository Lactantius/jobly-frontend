import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface SignupProps {
  user: User | null;
  register: Function;
}

function Signup({ user, register }: SignupProps): JSX.Element {
  const [formData, setFormData] = useState({} as SignupFormVals);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const res = register(formData);
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
        name="username"
        id="username"
        placeholder="Username"
        onChange={handleChange}
      />
      <input
        type="text"
        name="firstName"
        id="firstName"
        placeholder="First Name"
        onChange={handleChange}
      />
      <input
        type="text"
        name="lastName"
        id="lastName"
        placeholder="Last Name"
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        id="email"
        placeholder="address@example.com"
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Password"
        onChange={handleChange}
      />
      <input
        type="password"
        name="confirmPassword"
        id="confirmPassword"
        placeholder="Confirm password"
        onChange={handleChange}
      />
      <button>Sign up</button>
    </form>
  );
}

export default Signup;
