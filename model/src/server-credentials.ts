import { Token, asToken } from './token';

export type ServerCredentials = {} & Token;

export function asServerCredentials(serverCredentials: ServerCredentials) {
  return {
    ...asToken(serverCredentials),
  };
}
