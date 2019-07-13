import { createAction, props } from '@ngrx/store';
import { GalleryProps } from '@memmy/model';

export const receivedGalleries = createAction(
  '[Dashboard] Received Galleries',
  props<{ galleries: GalleryProps[] }>(),
);