import credentials, { CredentialsProvider } from './credentials';
import { Provider } from '../../core/provider';
import { Token } from '@memmy/model';

export function isAuthenticated(credentials: Token | null) {
  return credentials !== null;
}

export type IsAuthenticated = ReturnType<typeof isAuthenticated>;
export type IsAuthenticatedProvider = Provider<IsAuthenticated, []>;

export const isAuthenticatedContainer = (credentials: CredentialsProvider) => () => isAuthenticated(credentials());

export default isAuthenticatedContainer(credentials);