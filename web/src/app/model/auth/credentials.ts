import { getCredentials } from '../state/selector/server/server';
import { selectorServiceGetter } from '../state/core/selector-service-getter';
import store from '../state/store/store';
import { Provider } from '../../core/provider';

export const credentialsContainer = selectorServiceGetter(getCredentials);

export type Credentials = ReturnType<typeof getCredentials>;
export type CredentialsProvider = Provider<Credentials, []>;

export default credentialsContainer(store)
