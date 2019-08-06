import { createReducer, on } from '@ngrx/store';
import { loginSuccessful } from '../../action/login';
import { ServerCredentials, asServerCredentials } from '@memmy/model';
import { logoutSuccessful } from '../../action/logout';

export const initialServerCredentialsState: ServerCredentials | undefined = undefined;

export const serverCredentialsReducer = createReducer<ServerCredentials | undefined>(
  initialServerCredentialsState,
  on(loginSuccessful, (_, action) => asServerCredentials(action)),
  on(logoutSuccessful, () => initialServerCredentialsState),
);
