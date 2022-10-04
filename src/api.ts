import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

interface GetCompaniesResponse {
  companies: Company[];
}

interface GetJobsResponse {
  jobs: Job[];
}

interface TokenResponse {
  token: string;
}

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // the token for interactive with the API will be stored here.
  static token: string;

  static async request(
    endpoint: string,
    data = {},
    method = "get"
  ): Promise<any> {
    console.debug("API Call:", endpoint, data, method);

    //there are multiple ways to pass an authorization token, this is how you pass it in the header.
    //this has been provided to show you another way to pass the token. you are only expected to read this code for this project.
    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = method === "get" ? data : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err: any) {
      console.error("API Error:", err.response);
      const message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get details on a company by handle. */

  static async getCompany(handle: string): Promise<any> {
    const res = await this.request(`companies/${handle}`);
    return res.company;
  }

  // static async getAllCompanies(): Promise<any> {
  //   const res = await this.request(`companies`);
  //   return res.companies;
  // }

  static async getAllCompanies(filters: CompanyFilters): Promise<Company[]> {
    const { data } = await axios.get<GetCompaniesResponse>(
      `${BASE_URL}/companies`,
      { params: filters }
    );
    return data.companies;
  }

  static async getAllJobs(filters: JobFilters): Promise<Job[]> {
    const { data } = await axios.get<GetJobsResponse>(`${BASE_URL}/jobs`, {
      params: filters,
    });
    return data.jobs;
  }

  static async login(
    username: string,
    password: string
  ): Promise<TokenResponse> {
    const { data } = await axios.post(`${BASE_URL}/auth`, {
      data: { username, password },
    });
    return data.token;
  }

  static async register({
    username,
    password,
    firstName,
    lastName,
    email,
  }: SignupFormVals): Promise<TokenResponse> {
    console.log(username, password, firstName, lastName, email);
    const { data } = await axios.post(`${BASE_URL}/auth/register`, {
      username,
      password,
      firstName,
      lastName,
      email,
    });
    console.log(data);
    return data.token;
  }
}

// for now, put token ("testuser" / "password" on class)
JoblyApi.token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
  "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
  "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";

export default JoblyApi;
