import { combineReducers } from '@ngrx/store';
import { initialServerCredentialsState, serverCredentialsReducer } from './server-credentials';

export interface ServerState {
  credentials: typeof initialServerCredentialsState;
}

export const initialServerState: ServerState = {
  credentials: initialServerCredentialsState,
};

export const serverReducer = combineReducers({
  credentials: serverCredentialsReducer,
});
