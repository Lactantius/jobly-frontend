interface Company {
  handle: string;
  name: string;
  description: string;
  numEmployees: number;
  logoUrl: string;
}

interface CompanyDetail extends Company {
  jobs: Job[];
}

interface Job {
  id: number;
  title: string;
  salary: number;
  equity: string;
}

interface JobDetail extends Job {
  company: Company;
}
