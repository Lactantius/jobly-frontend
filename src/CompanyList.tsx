import React, { useState, useEffect } from "react";

import CompanyCard from "./CompanyCard";

import JoblyApi from "./api";

function CompanyList(): JSX.Element {
  const [companies, setCompanies] = useState(Array<Company>);

  const addCompanies = (comps: Company[]) =>
    setCompanies((oldComps) => [...oldComps, ...comps]);

  useEffect(() => {
    void JoblyApi.getAllCompanies().then((comps: Company[]) =>
      addCompanies(comps)
    );
  }, []);

  console.log(companies);

  return (
    <div className="CompanyList">
      <>
        <h2>All Companies</h2>
        {companies.map((company) => {
          return <CompanyCard key={company.handle} company={company} />;
        })}
      </>
    </div>
  );
}

export default CompanyList;
