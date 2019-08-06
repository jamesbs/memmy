import { combineReducers } from '@ngrx/store';
import { serverCredentialsReducer } from './server-credentials';
import { nullAction } from 'web/src/app/core/null-action';

export type ServerState = { [K in keyof typeof initialServerState]: typeof initialServerState[K] };

export const serverReducer = combineReducers({
  credentials: serverCredentialsReducer,
});

export const initialServerState = serverReducer(undefined, nullAction);