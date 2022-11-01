import React, { useState, useEffect } from "react";

import JobCard from "./JobCard";
import JoblyApi from "./api";
import JobSearch from "./JobSearch";
import { Navigate } from "react-router-dom";
import "./JobList.css";

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

  if (!user) return <Navigate to="/" />;

  return (
    <div className="JobList">
      <h1>Jobs</h1>
      <JobSearch setFilters={setFilters} />
      <div className="JobList-list">
        <h2>{jobs.length} Jobs</h2>
        {jobs.map((job) => {
          return <JobCard key={job.id} job={job} />;
        })}
      </div>
    </div>
  );
}

export default JobList;
