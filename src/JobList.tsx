import React, { useState, useEffect } from "react";

import JobCard from "./JobCard";
import JoblyApi from "./api";
import JobSearch from "./JobSearch";

interface JobProps {
  user: User | null;
}

function JobList({ user }: JobProps): JSX.Element {
  const [jobs, setJobs] = useState(Array<Job>);
  const [filters, setFilters] = useState({} as JobFilters);

  console.debug("JobCardList", "jobs=", jobs);

  useEffect(() => {
    void JoblyApi.getAllJobs(filters).then((jobs: Job[]) => setJobs(jobs));
  }, [filters]);

  return (
    <div className="JobList">
      <JobSearch setFilters={setFilters} />
      <h2>{jobs.length} Jobs</h2>
      {jobs.map((job) => {
        return <JobCard key={job.id} job={job} />;
      })}
    </div>
  );
}

export default JobList;
