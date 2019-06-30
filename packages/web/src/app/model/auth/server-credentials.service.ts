import { Injectable } from '@angular/core';
import { ServerCredentials } from '@memmy/model';

@Injectable({
  providedIn: 'root',
})
export class ServerCredentialsService {
  credentials: ServerCredentials | undefined;

  isAuthenticated() {
    return this.credentials !== undefined;
  }
}
