import React, { useState } from "react";

import JoblyApi from "./api";
import "./JobCard.css";

interface JobProps {
  job: Job;
  user: User;
  token: string;
}

function JobCard({ job, user, token }: JobProps): JSX.Element {
  const [applied, setApplied] = useState<boolean>(
    user.applications.some((applied) => applied.id === job.id)
  );

  const apply = (jobId: number, username: string, token: string) => {
    JoblyApi.apply({ jobId: String(jobId), username }, token);
    setApplied(true);
  };

  return (
    <div className="JobCard">
      <h3>{job.title}</h3>
      <p>
        Salary: {job.salary}; Equity: {job.equity ?? 0}
      </p>
      {!applied ? (
        <button onClick={() => apply(job.id, user.username, token)}>
          Apply
        </button>
      ) : (
        <p>
          <i>Applied</i>
        </p>
      )}
    </div>
  );
}

export default JobCard;
