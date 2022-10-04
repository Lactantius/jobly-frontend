import React from "react";

import JoblyApi from "./api";

interface JobProps {
  job: Job;
}

function JobCard({ job }: JobProps): JSX.Element {
  return (
    <div className="JobCard">
      <h3>{job.title}</h3>
      <p>
        Salary: {job.salary}; Equity: {job.equity}
      </p>
    </div>
  );
}

export default JobCard;
