import { createReducer, on } from '@ngrx/store';
import { loginSuccessful } from '../../action/login';
import { ServerCredentials } from '@memmy/model';

export const initialServerCredentialsState: ServerCredentials | undefined = undefined;

export const serverCredentialsReducer = createReducer<ServerCredentials | undefined>(
  initialServerCredentialsState,
  on(loginSuccessful, (state, action) => action)
);
