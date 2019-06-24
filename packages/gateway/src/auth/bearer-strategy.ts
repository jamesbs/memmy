import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-http-bearer';
import { AuthorizationService } from './authorization.service';
import { AuthenticationService } from './authentication.service';
import { User } from '@memmy/model';

@Injectable()
export class BearerStrategy extends PassportStrategy(Strategy) {
  constructor(
    private authenticationService: AuthenticationService,
    private authorizationService: AuthorizationService) {
    super();
  }

  validate(token: string): User {
    const user = this.authenticationService.getUser(token);

    if (user === undefined || !this.authorizationService.isAuthorized(user)) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
