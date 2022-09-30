import React from "react";

import JobCard from "./JobCard";

function JobList(): JSX.Element {
  const jobs: Job[] = [];
  return (
    <div className="JobList">
      {jobs.map((job) => {
        <JobCard key={job.id} job={job} />;
      })}
    </div>
  );
}

export default JobList;
