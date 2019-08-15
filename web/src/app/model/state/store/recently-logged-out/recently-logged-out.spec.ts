import { recentlyLoggedOutReducer } from "./recently-logged-out";
import { logoutSuccessful } from '../../action/logout';
import { initActionStub } from '../../core/init-action-stub';

describe('recently logged out', () => {
  it('is not recently logged out by default', () => {
    expect(recentlyLoggedOutReducer(undefined, initActionStub)).toBe(false);
  });

  it('is recently logged out after a successful login', () => {
    expect(recentlyLoggedOutReducer(false, logoutSuccessful.creator()));
  });
});