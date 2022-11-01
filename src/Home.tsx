import React from "react";
import { Link } from "react-router-dom";

import "./Home.css";

interface HomeProps {
  user: User | null;
}

function Home({ user }: HomeProps): JSX.Element {
  if (user) {
    return (
      <div className="Home">
        <p>Welcome back, {user.firstName || user.username}</p>
      </div>
    );
  }
  return (
    <div className="Home">
      <h1>Jobly</h1>
      <p>Log in or sign up to get started.</p>
      <div className="Home-buttons">
        <Link to="/login">Log in</Link>
        <Link to="/signup">Sign up</Link>
      </div>
    </div>
  );
}

export default Home;
