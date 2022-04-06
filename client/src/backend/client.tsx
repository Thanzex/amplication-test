import axios, { AxiosRequestHeaders, Method } from "axios";

export interface APIConfig {
  baseURL: string;
}

export class API {
  baseURL: string;
  token: string | null;

  constructor(options: APIConfig) {
    this.baseURL = options.baseURL;
    this.token = null;
  }

  login = async (username: string, password: string) => {
    const response = await this.request("login", "post", {
      username,
      password,
    });
    this.token = response.data.accessToken;
    return response.data;
  };

  async request(url: string, method: Method, data?: any) {
    let headers: AxiosRequestHeaders = {
      "Content-Type": "application/json",
      "Accept": "application/json",
    };
    if (this.token != null) {
      headers["Authorization"] = `Bearer ${this.token}`;
    }
    const result = await axios({
      url: `${this.baseURL}/api/${url}`,
      method,
      data,
      headers,
    });
    return result;
  }
}
