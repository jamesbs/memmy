import { getCredentials } from '../state/selector/server/server';
import { connectStore } from '../state/store/connect-store';
import store from '../state/store/store';
import { Provider } from '../../core/provider';

export const credentialsContainer = connectStore(getCredentials);

export type Credentials = ReturnType<typeof getCredentials>;
export type CredentialsProvider = Provider<Credentials, []>;

export default credentialsContainer(store)
