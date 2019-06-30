import { LoginCredentials } from './login-credentials';
import { Token } from './token';

export type ILogin = (credentials: LoginCredentials) => Token;
