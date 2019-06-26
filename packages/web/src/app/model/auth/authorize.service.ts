import { Injectable } from '@angular/core';
import { HttpRequest } from '@angular/common/http';
import { stringifyToken, Identifiable } from '@memmy/model';
import { ServerCredentialsService } from './server-credentials.service';
import { RoutedRequest } from '../routed-request';
import { WithAuthIdentifier, getIdentifier, withoutAuthIdentifier } from './with-auth-identifier';

@Injectable({
  providedIn: 'root'
})
export class AuthorizeService {

  constructor(
    private serverCredentials: ServerCredentialsService,
  ) { }

  withAuthorization<T, U = unknown>(requestGenerator: RoutedRequest<T, U>) {
    return (argsWithAuth: T & WithAuthIdentifier) => {
      const credentials = this.serverCredentials.getCredentials(getIdentifier(argsWithAuth));

      return requestGenerator(withoutAuthIdentifier(argsWithAuth)).clone({
        setHeaders: {
          Authorization: `Bearer ${stringifyToken(credentials)}`,
        },
      });
    };
  }
}
