import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export async function getService(
  endpoint: string,
  isTokenNeeded: boolean = true
) {
  //   const tokenKey: string = `Bearer ${Cookies.get("sessionKey")}`;

  const reqConfig: AxiosRequestConfig = isTokenNeeded
    ? { headers: { Authorization: "" } }
    : {};

  const { data }: AxiosResponse = await axios.get(endpoint, reqConfig);

  return data;
}

export async function postService(
  endpoint: string,
  body: any,
  isTokenNeeded: boolean = true
) {
  //   const tokenKey: string = `Bearer ${Cookies.get("sessionKey")}`;

  const reqConfig: AxiosRequestConfig = isTokenNeeded
    ? { headers: { Authorization: "" } }
    : {};

  const { data }: AxiosResponse = await axios.post(endpoint, reqConfig);

  return data;
}

export async function putService(
  endpoint: string,
  body: any,
  isTokenNeeded: boolean = true
) {
  //   const tokenKey: string = `Bearer ${Cookies.get("sessionKey")}`;

  const reqConfig: AxiosRequestConfig = isTokenNeeded
    ? { headers: { Authorization: "" } }
    : {};

  const { data }: AxiosResponse = await axios.put(endpoint, reqConfig);

  return data;
}

export async function patchService(
  endpoint: string,
  body: any,
  isTokenNeeded: boolean = true
) {
  //   const tokenKey: string = `Bearer ${Cookies.get("sessionKey")}`;

  const reqConfig: AxiosRequestConfig = isTokenNeeded
    ? { headers: { Authorization: "" } }
    : {};

  const { data }: AxiosResponse = await axios.patch(endpoint, reqConfig);

  return data;
}

export async function deleteService(
  endpoint: string,
  body?: any,
  isTokenNeeded: boolean = true
) {
  //   const tokenKey: string = `Bearer ${Cookies.get("sessionKey")}`;

  const reqConfig: AxiosRequestConfig = isTokenNeeded
    ? { headers: { Authorization: "" } }
    : {};

  const { data }: AxiosResponse = await axios.delete(endpoint, reqConfig);

  return data;
}
