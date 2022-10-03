import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import JoblyApi from "./api";

import JobCard from "./JobCard";

function Company(): JSX.Element {
  const { handle } = useParams();

  const [company, setCompany] = useState({} as CompanyDetail);

  useEffect(() => {
    JoblyApi.getCompany(handle!).then((data) => {
      console.log(data);
      setCompany((old) => data);
    });
  }, [handle]);

  if (Object.keys(company).length === 0) return <h2>Loading...</h2>;

  console.debug("Company", "company=", company);
  return (
    <React.StrictMode>
      <div className="Company">
        <h2>{company.name}</h2>
        <p>{company.description}</p>
        <p>Employees: {company.numEmployees}</p>
        <h3>Jobs:</h3>
        {company.jobs.map((job) => (
          <JobCard job={job} />
        ))}
      </div>
    </React.StrictMode>
  );
}

export default Company;