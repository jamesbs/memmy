import { Injectable } from '@angular/core';
import { User, stringifyToken } from '@memmy/model';
import { HttpRequest } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(private authentication: AuthenticationService) { }

  authorize(user: User) {
    return (request: HttpRequest<unknown>) => request
      // request.clone({
      //   setHeaders: {
      //     Authorization: `Bearer ${stringifyToken(this.authentication.credentials(user))}`,
      //   },
      // });
  }
}
