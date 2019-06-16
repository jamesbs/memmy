import { Gallery } from './gallery';
import { Identifiable } from './primitives/identifiable';

export type IGetUserGalleries = (user: Identifiable) => Gallery[]
