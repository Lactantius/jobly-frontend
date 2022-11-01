import React, { useState, useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";

import JoblyApi from "./api";
import JobCard from "./JobCard";
import "./Company.css";

interface CompanyProps {
  user: User | null;
  token: string | null;
}

function Company({ user, token }: CompanyProps): JSX.Element {
  const { handle } = useParams();

  const [company, setCompany] = useState<CompanyDetail>({} as CompanyDetail);

  useEffect(() => {
    JoblyApi.getCompany(handle!).then((data) => {
      console.log(data);
      setCompany((old) => data);
    });
  }, [handle]);

  if (Object.keys(company).length === 0) return <h2>Loading...</h2>;

  if (!user) return <Navigate to="/" />;

  console.log(user);

  console.debug("Company", "company=", company);
  return (
    <React.StrictMode>
      <div className="Company">
        <h1>{company.name}</h1>
        <p>{company.description}</p>
        <p>Employees: {company.numEmployees}</p>
        <h2>Jobs:</h2>
        {company.jobs.map((job) => (
          <JobCard job={job} user={user} token={token!} />
        ))}
      </div>
    </React.StrictMode>
  );
}

export default Company;
