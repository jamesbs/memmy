import { Injectable } from '@angular/core';
import { Token, User } from '@memmy/model';

@Injectable({
  providedIn: 'root',
})
export class ServerCredentialsService {
  getCredentials(_: User): Token {
    return { token: 'Y7s6tGAHtkjkFmTV' };
  }
}
