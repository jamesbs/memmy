import { Injectable } from '@angular/core';
import { Token, User } from '@memmy/model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  credentials(_: User): Token {
    return { token: 'Y7s6tGAHtkjkFmTV' };
  }
}
