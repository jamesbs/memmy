import { Gallery } from './gallery';
import { Identifiable } from './primitives/identifiable';

export type IGetUserGalleries = (userId: Identifiable) => Gallery[]
