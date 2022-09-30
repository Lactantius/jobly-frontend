import React from "react";

import CompanyCard from "./CompanyCard";

function CompanyList(): JSX.Element {
  const companies: Company[] = [];
  return (
    <div className="CompanyList">
      {companies.map((company) => {
        <CompanyCard key={company.handle} company={company} />;
      })}
    </div>
  );
}

export default CompanyList;
