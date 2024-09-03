import { IHttpClient } from "./contracts";
import { fetchHttpClient } from "./implementations/fetch-client";



let httpClient: IHttpClient = fetchHttpClient;

export const setHttpClient = (client: IHttpClient) => {
  httpClient = client;
}

export const getHttpClient = () => httpClient;