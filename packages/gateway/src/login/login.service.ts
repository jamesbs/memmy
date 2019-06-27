import { Injectable } from '@nestjs/common';
import { LoginCredentials } from '@memmy/model';

@Injectable()
export class LoginService {
  authenticateLogin(credentials: LoginCredentials) {
    return 'Y7s6tGAHtkjkFmTV';
  }
}
