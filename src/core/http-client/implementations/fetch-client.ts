import { BASE_URL } from "../constants";
import { IHttpClient } from "../contracts";

let baseURL: string = BASE_URL;

export async function setBaseUrl(url: string) {
  baseURL = url;
}

function buildUrl(endpoint: string, params?: Record<string, string>): URL {
  if (!baseURL) throw new Error('baseURL must be initialized');

  if (params) {
    for (const [key, value] of Object.entries(params)) {
      endpoint = endpoint.replace(`:${key}`, value);
    }
  }

  return new URL(`/api${endpoint}`, baseURL);
}

async function fetchGet<T, O>(endpoint: string, params?: Record<string, string>, options?: O): Promise<T> {
  const url = buildUrl(endpoint, params);

  const response = await fetch(url.toString(), options as RequestInit);

  if (!response.ok) {
    throw new Error(`Failed to fetch: ${response.statusText}`);
  }

  return await response.json() as Promise<T>;
  
}

async function fetchPost<T, R, O>(endpoint: string, data: R, options?: O): Promise<T> {
  const url = buildUrl(endpoint);
    const response = await fetch(url.toString(), {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
      ...(options as RequestInit),
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.statusText}`);
    }

    return response.json() as Promise<T>;
}

async function fetchDelete<T, O>(endpoint: string, params?: Record<string, string>, options?: O): Promise<T> {
  const url = buildUrl(endpoint, params);

  const headers = new Headers();
  headers.append("Access-Control-Allow-Origin", "http://localhost:3000/");

  const response = await fetch(url.toString(), {
    method: 'DELETE',
    headers,
    ...(options as RequestInit),
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch: ${response.statusText}`);
  }

  return response.json() as Promise<T>;
}

export const fetchHttpClient: IHttpClient = {
  get: fetchGet,
  post: fetchPost,
  delete: fetchDelete
}