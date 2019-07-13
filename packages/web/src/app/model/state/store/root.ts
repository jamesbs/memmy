import { serverReducer } from './server/server-state';
import { recentlyLoggedOutReducer } from './recently-logged-out/recently-logged-out';
import { galleryReducer } from './gallery/gallery-state';

export const rootReducer = {
  server: serverReducer,
  recentlyLoggedOut: recentlyLoggedOutReducer,
  gallery: galleryReducer,
};

export type RootState = { [P in keyof typeof rootReducer]: ReturnType<(typeof rootReducer)[P]> };