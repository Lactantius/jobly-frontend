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

interface CompanyFilters {
  name: string;
  minEmployees: number;
  maxEmployees: number;
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
