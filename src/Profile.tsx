import React, { useState } from "react";
import { Navigate } from "react-router-dom";

import "./Profile.css";

interface ProfileProps {
  user: User | null;
  updateUser: Function;
}

function Profile({ user, updateUser }: ProfileProps): JSX.Element {
  const [formData, setFormData] = useState(
    user
      ? ({
          username: user.username,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          password: "",
        } as ProfileFormVals)
      : ({} as ProfileFormVals)
  );
  if (!user) return <Navigate to="/" />;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const res = updateUser(formData);
  };

  const handleChange = (e: React.ChangeEvent) => {
    const { name, value } = e.target as HTMLInputElement;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  };
  return (
    <div className="Profile">
      <h1>Profile</h1>
      <form className="Profile-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="address@example.com"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Confirm password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button>Edit info</button>
      </form>
    </div>
  );
}

export default Profile;
