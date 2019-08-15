import { initialGalleriesState, galleriesReducer } from './galleries';
import { combineReducers } from 'redux';

export const initialGalleryState = {
  galleries: initialGalleriesState,
};

export type GalleryState = typeof initialGalleryState;

export const galleryReducer = combineReducers({
  galleries: galleriesReducer,
})