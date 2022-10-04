import React, { useState } from "react";
import { Navigate } from "react-router-dom";

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
    <form className="Profile" onSubmit={handleSubmit}>
      <input
        type="text"
        id="email"
        name="email"
        placeholder="address@example.com"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        type="text"
        id="firstName"
        name="firstName"
        placeholder="First Name"
        value={formData.firstName}
        onChange={handleChange}
      />
      <input
        type="text"
        id="lastName"
        name="lastName"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={handleChange}
      />
      <input
        type="password"
        id="password"
        name="password"
        placeholder="Confirm password"
        value={formData.password}
        onChange={handleChange}
      />
      <button>Edit info</button>
    </form>
  );
}

export default Profile;
