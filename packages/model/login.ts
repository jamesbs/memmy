import { LoginCredentials } from './login-credentials';
import { AccessToken } from './access-token';

export type ILogin = (credentials: LoginCredentials) => AccessToken;
