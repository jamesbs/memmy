import { Gallery, GalleryProps } from './gallery';
import { Token } from './token';
import { User } from './user';
import { Status } from './primitives/status';
import { OperationSuccess } from './primitives/operation-success';
import { GeneratedData } from './primitives/generated-data';

export type IGetGalleriesByUser = (user: User) => GalleryProps[]

export type IGetGalleriesByToken = (token: Token) => GalleryProps[]

export type IGetGalleryById = (token: Token, galleryId: string) => Gallery

export type IAddGallery = (token: Token, galleryName: string) => 
    Status<OperationSuccess> 
  & GeneratedData<GalleryProps>