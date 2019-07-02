import { Gallery, GalleryProps } from './gallery';
import { Token } from './token';
import { User } from './user';

export type IGetGalleriesByUser = (user: User) => GalleryProps[]

export type IGetGalleriesByToken = (token: Token) => GalleryProps[]

export type IGetGalleryById = (token: Token, galleryId: string) => Gallery
