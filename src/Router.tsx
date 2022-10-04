import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import Company from "./Company";
import CompanyList from "./CompanyList";
import JobList from "./JobList";
import Login from "./Login";
import Signup from "./Signup";
import Profile from "./Profile";

interface RouterProps {
  login: Function;
  register: Function;
  user: UserToken | null;
}

function Router({ login, register, user }: RouterProps): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Home user={user} />} />
      <Route path="/companies" element={<CompanyList user={user} />} />
      <Route path="/companies/:handle" element={<Company user={user} />} />
      <Route path="/jobs" element={<JobList user={user} />} />
      <Route path="/login" element={<Login login={login} user={user} />} />
      <Route
        path="/signup"
        element={<Signup register={register} user={user} />}
      />
      <Route path="/profile" element={<Profile user={user} />} />
    </Routes>
  );
}

export default Router;
