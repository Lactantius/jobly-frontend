import React, { useState } from "react";

import "./JobSearch.css";

interface JobSearchProps {
  setFilters: Function;
}

type FilterKeys = "title" | "minSalary" | "hasEquity";

function JobSearch({ setFilters }: JobSearchProps): JSX.Element {
  const [formData, setFormData] = useState({} as JobFilters);
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const filters = { ...formData, hasEquity: !!isChecked };
    //setFormData({ ...formData, hasEquity: !!isChecked });
    setFilters(filters);
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
      if (!fData[name]) delete fData[name];
      return fData;
    });
  };

  return (
    <div className="JobSearch">
      <form className="JobSearch-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="minSalary">Minimum Salary</label>
          <input
            type="number"
            id="minSalary"
            name="minSalary"
            onChange={handleChange}
          />
        </div>
        <div className="JobSearch-checkbox">
          <label htmlFor="hasEquity">Equity Required?</label>
          <input
            type="checkbox"
            id="hasEquity"
            name="hasEquity"
            checked={isChecked}
            onChange={handleChange}
          />
        </div>
        <button>Search</button>
      </form>
    </div>
  );
}

export default JobSearch;
