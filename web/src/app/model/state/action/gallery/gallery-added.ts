import { createAction, props } from '@ngrx/store';
import { GalleryProps } from '@memmy/model';

export const galleryAdded = createAction(
  '[Dashboard] Gallery Added',
  props<{ gallery: GalleryProps }>(),
);