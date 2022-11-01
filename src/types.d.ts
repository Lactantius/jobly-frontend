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

interface JobFilters {
  title: string;
  minSalary: number;
  hasEquity: boolean;
}

interface User {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  isAdmin: boolean;
  applications: Job[];
}

interface UserToken {
  username: string;
  isAdmin: boolean;
  iat: number;
}

interface SignupFormVals {
  username: string;
  password: string;
  confirmPassword: string;
  email: string;
  firstName: string;
  lastName: string;
}

interface LoginFormVals {
  username: string;
  password: string;
}

interface ProfileFormVals {
  username: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
}

interface UserCredentials {
  username: string;
  token: string;
}
