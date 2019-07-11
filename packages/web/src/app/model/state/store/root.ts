import { serverReducer, initialServerState } from './server/server-state';
import { recentlyLoggedOutReducer, initialRecentlyLoggedOutState } from './recently-logged-out/recently-logged-out';

export interface RootState {
  server: typeof initialServerState;
  recentlyLoggedOut: typeof initialRecentlyLoggedOutState;
}

export const rootReducer = {
  server: serverReducer,
  recentlyLoggedOut: recentlyLoggedOutReducer,
};
