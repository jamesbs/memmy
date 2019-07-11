import { RootState } from '../store/root';

export const getServerState = (state: RootState) => state.server;

export const getRecentlyLoggedOutState = (state: RootState) => state.recentlyLoggedOut;