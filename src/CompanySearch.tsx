import React, { useState } from "react";

import "./CompanySearch.css";

interface CompanySearchProps {
  setFilters: Function;
}

type FilterKeys = "name" | "minEmployees" | "maxEmployees";

function CompanySearch({ setFilters }: CompanySearchProps): JSX.Element {
  const [formData, setFormData] = useState({} as CompanyFilters);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFilters(formData);
  };

  const handleChange = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    const name = target.name as FilterKeys;
    const value = target.value;
    setFormData((fData) => {
      fData = { ...fData, [name]: value };
      if (!fData[name]) delete fData[name];
      return fData;
    });
  };

  return (
    <div className="CompanySearch">
      <h2>Search</h2>
      <form className="CompanySearch-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="minEmployees">Minimum Employees</label>
          <input
            type="number"
            id="minEmployees"
            name="minEmployees"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="maxEmployees">Maximum Employees</label>
          <input
            type="number"
            id="maxEmployees"
            name="maxEmployees"
            onChange={handleChange}
          />
        </div>
        <button>Search</button>
      </form>
    </div>
  );
}

export default CompanySearch;
