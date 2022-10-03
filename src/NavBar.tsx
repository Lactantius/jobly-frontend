import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(): JSX.Element {
  return (
    <nav className="NavBar">
      <NavLink to="/">Jobly</NavLink>
      <NavLink to="/companies">Companies</NavLink>
      <NavLink to="/jobs">Jobs</NavLink>
      <NavLink to="/profile">Profile</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/signup">Sign up</NavLink>
    </nav>
  );
}

export default NavBar;
