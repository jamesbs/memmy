import { serverReducer, initialServerState } from './server/server-state';
import { recentlyLoggedOutReducer, initialRecentlyLoggedOutState } from './recently-logged-out/recently-logged-out';
import { Store } from '@ngrx/store';

export interface RootState {
  server: typeof initialServerState;
  recentlyLoggedOut: typeof initialRecentlyLoggedOutState;
}

export const rootReducer = {
  server: serverReducer,
  recentlyLoggedout: recentlyLoggedOutReducer,
};
