import { recentlyLoggedOutReducer } from "./recently-logged-out";
import { INIT } from '@ngrx/store';
import { logoutSuccessful } from '../../action/logout';

describe('recently logged out', () => {
  it('is not recently logged out by default', () => {
    expect(recentlyLoggedOutReducer(undefined, { type: INIT })).toBe(false);
  });

  it('is recently logged out after a successful login', () => {
    expect(recentlyLoggedOutReducer(false, logoutSuccessful()));
  });
})