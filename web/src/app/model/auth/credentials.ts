import { getCredentials } from '../state/selector/server/server';
import { connectStore } from '../state/store/connect-store';
import store from '../state/store/store';

export const credentialsContainer = connectStore(getCredentials);

export default credentialsContainer(store)

export type CredentialsProvider = ReturnType<typeof credentialsContainer>;