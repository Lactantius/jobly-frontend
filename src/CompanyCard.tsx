import React from "react";

interface CompanyProps {
  company: Company;
}

function CompanyCard({ company }: CompanyProps): JSX.Element {
  return (
    <div className="CompanyCard">
      <a href={`/companies/${company.handle}`}>
        <h3>{company.name}</h3>
      </a>
      <p>{company.description}</p>
      <p>Employees: {company.numEmployees}</p>
    </div>
  );
}

export default CompanyCard;
