import { Injectable } from '@nestjs/common';
import { LoginCredentials, Token } from '@memmy/model';

@Injectable()
export class LoginService {
  authenticateLogin(credentials: LoginCredentials): Token {
    return { token: 'Y7s6tGAHtkjkFmTV' };
  }
}
