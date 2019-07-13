import { getGalleryState } from '../root';
import { createSelector } from 'reselect';

export const getGalleries = createSelector(getGalleryState, gallery => gallery.galleries);