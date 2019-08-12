import { getResponseBody } from './http-response';
import { TypedResponse } from './typed-response';

export function responseOf<T>(response: Promise<TypedResponse<T>>) {
  return response.then(getResponseBody);
}
