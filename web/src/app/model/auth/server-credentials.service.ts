import { Injectable } from '@angular/core';
import { ServerCredentials } from '@memmy/model';
import { Store } from '@ngrx/store';
import { RootState } from '../state/store/root';
import { getCredentials } from '../state/selector/server/server';
import { initialServerCredentialsState } from '../state/store/server/server-credentials';

@Injectable({
  providedIn: 'root',
})
export class ServerCredentialsService {
  constructor(private store: Store<RootState>) {
    this.store.select(getCredentials)
      .subscribe(credentials => {
        this._credentials = credentials;
      });
  }

  private _credentials: typeof initialServerCredentialsState = undefined;

  get credentials() {
    return this._credentials;
  }

  isAuthenticated() {
    return this.credentials !== undefined;
  }
}
