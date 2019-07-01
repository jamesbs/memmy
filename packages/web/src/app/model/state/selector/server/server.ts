import { createSelector } from 'reselect';
import { getServerState } from '../root';

export const getCredentials = createSelector(getServerState, server => server.credentials);
