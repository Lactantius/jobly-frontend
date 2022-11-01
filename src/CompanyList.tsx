import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

import CompanyCard from "./CompanyCard";
import JoblyApi from "./api";
import CompanySearch from "./CompanySearch";
import "./CompanyList.css";

interface CompanyListProps {
  user: User | null;
}

function CompanyList({ user }: CompanyListProps): JSX.Element {
  const [companies, setCompanies] = useState(Array<Company>);
  const [filters, setFilters] = useState({} as CompanyFilters);

  useEffect(() => {
    void JoblyApi.getAllCompanies(filters).then((comps: Company[]) =>
      setCompanies(comps)
    );
  }, [filters]);

  if (!user) return <Navigate to="/" />;

  return (
    <div className="CompanyList">
      <h1>Companies</h1>
      <CompanySearch setFilters={setFilters} />
      <div className="CompanyList-list">
        <h2>{companies.length} Companies</h2>
        {companies.map((company) => {
          return <CompanyCard key={company.handle} company={company} />;
        })}
      </div>
    </div>
  );
}

export default CompanyList;
