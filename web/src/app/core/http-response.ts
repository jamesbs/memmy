import { TypedResponse } from './typed-response';

export function getResponseBody<T>(response: TypedResponse<T>) {
  return response.json();
}