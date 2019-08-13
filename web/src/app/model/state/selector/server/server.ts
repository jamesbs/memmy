import { createSelector } from 'reselect';
import { getServerState } from '../root';
import { asToken } from '@memmy/model';

export const getCredentials = createSelector(getServerState, server => server.credentials);

export const getServerToken = createSelector(getCredentials, asToken);