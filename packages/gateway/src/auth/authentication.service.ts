import { Injectable } from '@nestjs/common';
import { User, LoginCredentials } from '@memmy/model';

@Injectable()
export class AuthenticationService {
  getUser(token: string): User | undefined {
    return { id: 'user' };
  }
}
