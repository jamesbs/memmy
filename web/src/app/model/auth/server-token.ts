import { selectorServiceSync } from '../state/core';
import { getServerToken } from '../state/selector/server/server';
import store from '../state/store/store';

export const serverTokenContainer = selectorServiceSync(getServerToken);

export type ServerTokenProvider = ReturnType<typeof serverTokenContainer>;

export default serverTokenContainer(store);
