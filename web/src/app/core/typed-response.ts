export interface TypedResponse<T> extends Response {
  json(): Promise<T>;
}