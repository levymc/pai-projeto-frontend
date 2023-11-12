import axios, { AxiosRequestConfig } from 'axios';

export function useCustomRequest() {
  const baseURL = process.env.URL_API;

  const makeRequest = async (
    method: string,
    route: string,
    body: any | null = null,
    headers: Record<string, string> = {},
    queryParams: Record<string, string> = {}
  ) => {
    const url: string = baseURL + route;

    const config: AxiosRequestConfig = {
      method: method,
      url: url,
      headers: headers,
      params: queryParams,
      data: body,
    };

    return axios(config);
  };

  return {
    makeRequest,
  };
}
