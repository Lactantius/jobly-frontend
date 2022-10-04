import React from "react";
import { NavLink } from "react-router-dom";

interface NavBarProps {
  user: UserToken | null;
}

function NavBar({ user }: NavBarProps): JSX.Element {
  return (
    <nav className="NavBar">
      <NavLink to="/">Jobly</NavLink>
      <NavLink to="/companies">Companies</NavLink>
      <NavLink to="/jobs">Jobs</NavLink>
      {user ? (
        <>
          <NavLink to="/profile">Profile</NavLink>
          <NavLink to="/logout">Logout {user.username}</NavLink>
        </>
      ) : (
        <>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/signup">Sign up</NavLink>
        </>
      )}
    </nav>
  );
}

export default NavBar;
