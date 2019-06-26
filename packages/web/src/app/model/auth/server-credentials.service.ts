import { Injectable } from '@angular/core';
import { Token, Identifiable } from '@memmy/model';

@Injectable({
  providedIn: 'root',
})
export class ServerCredentialsService {
  getCredentials(_: Identifiable): Token {
    return { token: 'Y7s6tGAHtkjkFmTV' };
  }
}
