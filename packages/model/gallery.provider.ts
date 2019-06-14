import { Gallery } from './gallery';
import { Identifiable } from './primitives/identifiable';

export type GetUserGalleries = (user: Identifiable) => Gallery[]
