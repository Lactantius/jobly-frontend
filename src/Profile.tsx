import React from "react";
import { Navigate } from "react-router-dom";

interface ProfileProps {
  user: User | null;
}

function Profile({ user }: ProfileProps): JSX.Element {
  if (!user) return <Navigate to="/" />;
  return <div></div>;
}

export default Profile;
