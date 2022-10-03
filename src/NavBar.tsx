import React from "react";
import { NavLink } from "react-router-dom";

interface NavBarProps {
  user: string | any | null;
}

function NavBar({ user }: NavBarProps): JSX.Element {
  console.log(user);
  const userInfo = typeof user === "object" ? (user as User) : null;
  return (
    <nav className="NavBar">
      <NavLink to="/">Jobly</NavLink>
      <NavLink to="/companies">Companies</NavLink>
      <NavLink to="/jobs">Jobs</NavLink>
      {userInfo ? (
        <>
          <NavLink to="/profile">Profile</NavLink>
          <NavLink to="/logout">Logout {userInfo.username}</NavLink>
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
