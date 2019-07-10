import { logoutSuccessful } from '../../action/logout';
import { createReducer, on } from '@ngrx/store';

export const initialRecentlyLoggedOutState = false;

export const recentlyLoggedOutReducer = createReducer(
  initialRecentlyLoggedOutState,
  on(logoutSuccessful, () => true),
);