import { selectorServiceSync } from '../state/core';
import { getRecentlyLoggedOutState } from '../state/selector/root';
import store from '../state/store/store';

export const recentlyLoggedOutContainer = selectorServiceSync(getRecentlyLoggedOutState);

export type RecentlyLoggedOutProvider = ReturnType<typeof recentlyLoggedOutContainer>;

export default recentlyLoggedOutContainer(store);