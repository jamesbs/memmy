import { Injectable } from '@angular/core';
import { HttpRequest } from '@angular/common/http';
import { User, stringifyToken } from '@memmy/model';
import { ServerCredentialsService } from './server-credentials.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizeService {

  constructor(
    private serverCredentials: ServerCredentialsService,
  ) { }

  withAuthorization(request: HttpRequest<unknown>, user: User) {
    const credentials = this.serverCredentials.getCredentials(user);

    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${stringifyToken(credentials)}`,
      },
    })
  }
}
