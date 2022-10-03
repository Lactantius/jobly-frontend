import React, { useState } from "react";

interface JobSearchProps {
  setFilters: Function;
}

type FilterKeys = "title" | "minSalary" | "hasEquity";

function JobSearch({ setFilters }: JobSearchProps): JSX.Element {
  const [formData, setFormData] = useState({} as JobFilters);
  const [isChecked, setIsChecked] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFilters(formData);
  };

  const handleChange = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    const name = target.name as FilterKeys;
    const value = target.value;
    if (name === "hasEquity") {
      setIsChecked((isChecked) => !isChecked);
    }
    setFormData((fData) => {
      fData = { ...fData, [name]: value };
      fData["hasEquity"] = !isChecked;
      if (!fData[name]) delete fData[name];
      return fData;
    });
  };

  return (
    <form className="JobSearch" onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input type="text" id="title" name="title" onChange={handleChange} />
      <label htmlFor="minSalary">Minimum Salary</label>
      <input
        type="number"
        id="minSalary"
        name="minSalary"
        onChange={handleChange}
      />
      <label htmlFor="hasEquity">Equity Required?</label>
      <input
        type="checkbox"
        id="hasEquity"
        name="hasEquity"
        checked={isChecked}
        onChange={handleChange}
      />
      <button>Search</button>
    </form>
  );
}

export default JobSearch;
