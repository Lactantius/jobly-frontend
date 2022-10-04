import React from "react";
import { Link } from "react-router-dom";

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
      <Link to="/login">Log in</Link>
      <Link to="/signup">Sign up</Link>
    </div>
  );
}

export default Home;
