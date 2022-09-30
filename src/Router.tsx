import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import Company from "./Company";
import CompanyList from "./CompanyList";
import JobList from "./JobList";
import Login from "./Login";
import Signup from "./Signup";
import Profile from "./Profile";

function Router(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/companies" element={<CompanyList />} />
      <Route path="/companies/:handle" element={<Company />} />
      <Route path="/jobs" element={<JobList />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default Router;
