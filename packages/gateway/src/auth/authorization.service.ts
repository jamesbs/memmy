import { Injectable } from '@nestjs/common';
import { User } from '@memmy/model';

@Injectable()
export class AuthorizationService {
  isAuthorized(user: User) {
    return true;
  }
}
