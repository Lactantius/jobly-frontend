import React from "react";

import JobCard from "./JobCard";

interface JobListProps {
  jobs: Job[];
}

function JobList({ jobs }: JobListProps): JSX.Element {
  console.debug("JobCardList", "jobs=", jobs);

  return (
    <div className="JobList">
      {jobs.map((job) => {
        return <JobCard key={job.id} job={job} />;
      })}
    </div>
  );
}

export default JobList;
