export interface IHttpClient {
  get<T>(endpoint: string, params?: Record<string, string>, options?: unknown): Promise<T>;
  post<T, R>(endpoint: string, data: R, options?: unknown): Promise<T>;
  delete<T>(endpoint: string, params?: Record<string, string>, options?: unknown): Promise<T>
}