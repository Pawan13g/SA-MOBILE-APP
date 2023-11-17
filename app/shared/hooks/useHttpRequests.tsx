// REQUIRED LIBS
import axios from "axios";

// HOOK
import { useSelector } from "react-redux";

// TYPES
import { AxiosRequestConfig, AxiosResponse } from "axios";

import { RootState } from "@rdx/store";

/**
 *
 * @returns requied functions for respective http methods
 */

const useHTTPServices = () => {
  const { API_BASE_URL } = useSelector(
    (state: RootState) => state.environment.urls
  );

  /**
   *
   * @param endpoint i.e., request endpoint
   * @param isTokenNeeded i.e., auth token / bearer token is needed or not (optional parameter)
   * @param nativeEndpoint  i.e., weather to use app native endpoint or use custom endpoint for outside api's
   * @returns i.e, return response returned by the api
   *
   */

  async function getService(
    endpoint: string,
    isTokenNeeded: boolean = true,
    nativeEndpoint: boolean = true
  ) {
    const requestEndpoint = nativeEndpoint
      ? `${API_BASE_URL}${endpoint}`
      : endpoint;

    const reqConfig: AxiosRequestConfig = isTokenNeeded
      ? { headers: { Authorization: "" } }
      : {};

    const { data }: AxiosResponse = await axios.get(requestEndpoint, reqConfig);

    return data;
  }

  async function postService(
    endpoint: string,
    body: any,
    isTokenNeeded: boolean = true,
    nativeEndpoint: boolean = true
  ) {
    const requestEndpoint = nativeEndpoint
      ? `${API_BASE_URL}${endpoint}`
      : endpoint;

    const reqConfig: AxiosRequestConfig = isTokenNeeded
      ? {
          headers: {
            Authorization: "",
            "Content-Type": "application/json",
            Accept: "*/*",
          },
        }
      : {};

    const { data }: AxiosResponse = await axios.post(
      requestEndpoint,
      body,
      reqConfig
    );

    return data;
  }

  async function putService(
    endpoint: string,
    body: any,
    isTokenNeeded: boolean = true,
    nativeEndpoint: boolean = true
  ) {
    const requestEndpoint = nativeEndpoint
      ? `${API_BASE_URL}${endpoint}`
      : endpoint;

    const reqConfig: AxiosRequestConfig = isTokenNeeded
      ? { headers: { Authorization: "" } }
      : {};

    const { data }: AxiosResponse = await axios.put(
      requestEndpoint,
      body,
      reqConfig
    );

    return data;
  }

  async function patchService(
    endpoint: string,
    body: any,
    isTokenNeeded: boolean = true,
    nativeEndpoint: boolean = true
  ) {
    const requestEndpoint = nativeEndpoint
      ? `${API_BASE_URL}${endpoint}`
      : endpoint;

    const reqConfig: AxiosRequestConfig = isTokenNeeded
      ? { headers: { Authorization: "" } }
      : {};

    const { data }: AxiosResponse = await axios.patch(
      requestEndpoint,
      body,
      reqConfig
    );

    return data;
  }

  async function deleteService(
    endpoint: string,
    isTokenNeeded: boolean = true,
    nativeEndpoint: boolean = true
  ) {
    const requestEndpoint = nativeEndpoint
      ? `${API_BASE_URL}${endpoint}`
      : endpoint;

    const reqConfig: AxiosRequestConfig = isTokenNeeded
      ? { headers: { Authorization: "" } }
      : {};

    const { data }: AxiosResponse = await axios.delete(
      requestEndpoint,
      reqConfig
    );

    return data;
  }

  return {
    getService,
    postService,
    putService,
    patchService,
    deleteService,
  };
};

export { useHTTPServices };
