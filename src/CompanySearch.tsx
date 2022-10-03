import React, { useState } from "react";

interface CompanySearchProps {
  setFilters: Function;
}

function CompanySearch({ setFilters }: CompanySearchProps): JSX.Element {
  const [formData, setFormData] = useState({} as CompanyFilters);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFilters(formData);
  };

  const handleChange = (e: React.ChangeEvent) => {
    const { name, value } = e.target as HTMLInputElement;
    setFormData((fData) => {
      fData = { ...fData, [name]: value };
      if (!fData[name]) delete fData[name];
      return fData;
    });
  };

  return (
    <form className="CompanySearch" onSubmit={handleSubmit}>
      <label htmlFor="text">Name</label>
      <input type="text" id="name" name="name" onChange={handleChange} />
      <label htmlFor="minEmployees">Minimum Employees</label>
      <input
        type="number"
        id="minEmployees"
        name="minEmployees"
        onChange={handleChange}
      />
      <label htmlFor="maxEmployees">Maximum Employees</label>
      <input
        type="number"
        id="maxEmployees"
        name="maxEmployees"
        onChange={handleChange}
      />
      <button>Search</button>
    </form>
  );
}

export default CompanySearch;
