import React, { useState, useEffect } from "react";

import CompanyCard from "./CompanyCard";

import JoblyApi from "./api";
import CompanySearch from "./CompanySearch";

function CompanyList(): JSX.Element {
  const [companies, setCompanies] = useState(Array<Company>);
  const [filters, setFilters] = useState({} as CompanyFilters);

  useEffect(() => {
    void JoblyApi.getAllCompanies(filters).then((comps: Company[]) =>
      setCompanies(comps)
    );
  }, [filters]);

  console.log(companies);

  return (
    <div className="CompanyList">
      <>
        <CompanySearch setFilters={setFilters} />
        <h2>All Companies</h2>
        {companies.map((company) => {
          return <CompanyCard key={company.handle} company={company} />;
        })}
      </>
    </div>
  );
}

export default CompanyList;
