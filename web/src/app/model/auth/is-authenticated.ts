import credentials, { CredentialsProvider } from './credentials';
import { Token } from '@memmy/model';

export function isAuthenticated(credentials: Token | undefined) {
  return credentials !== undefined;
}

export const isAuthenticatedContainer = (credentials: CredentialsProvider) => () => isAuthenticated(credentials());

export default isAuthenticatedContainer(credentials);