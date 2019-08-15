import { selectorServiceSync } from '../state/core';
import { getGalleries } from '../state/selector/gallery/galleries';
import store from '../state/store/store';

export const galleriesContainer = selectorServiceSync(getGalleries);

export type GalleriesProvider = ReturnType<typeof galleriesContainer>;

export default galleriesContainer(store);
