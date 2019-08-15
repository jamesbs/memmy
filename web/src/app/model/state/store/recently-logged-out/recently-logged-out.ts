import { logoutSuccessful } from '../../action/logout';
import { createReducer, on } from '../../core';

export const initialRecentlyLoggedOutState: boolean = false;

export const recentlyLoggedOutReducer = createReducer(
  initialRecentlyLoggedOutState,
  on(logoutSuccessful, () => true),
);