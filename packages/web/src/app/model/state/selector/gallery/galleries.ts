import { RootState } from '../../store/root';
import { createSelector } from 'reselect';

export const getGallery = (state: RootState) => state.gallery;

export const getGalleries = createSelector(getGallery, gallery => gallery.galleries);