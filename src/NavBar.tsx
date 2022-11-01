import React, { MouseEventHandler, ReactEventHandler } from "react";
import { NavLink } from "react-router-dom";

import "./NavBar.css";

interface NavBarProps {
  user: UserToken | null;
  logout: Function;
}

function NavBar({ user, logout }: NavBarProps): JSX.Element {
  return (
    <nav className="NavBar">
      <NavLink to="/">Jobly</NavLink>
      <NavLink to="/companies" className="push">
        Companies
      </NavLink>
      <NavLink to="/jobs">Jobs</NavLink>
      {user ? (
        <>
          <NavLink to="/profile">Profile</NavLink>
          <NavLink to="/" onClick={(e: React.MouseEvent) => logout()}>
            Logout {user.username}
          </NavLink>
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
