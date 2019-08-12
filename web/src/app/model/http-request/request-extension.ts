import { omit } from 'ramda';

export const requestExtensionKey = '__app__httpRequestExtension';

export type RequestExtension<T> = {
  [requestExtensionKey]: T
}

export function extension<T>(requestExtension: RequestExtension<T>) {
  return requestExtension[requestExtensionKey];
}

export function withoutExtension(requestExtension: RequestExtension<unknown>) {
return omit([requestExtensionKey as any], requestExtension) as any;
}