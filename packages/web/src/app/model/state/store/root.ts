import { serverReducer, initialServerState } from './server/server-state';
import { combineReducers } from '@ngrx/store';

export interface RootState {
  server: typeof initialServerState;
}

export const rootReducer = {
  server: serverReducer,
};
