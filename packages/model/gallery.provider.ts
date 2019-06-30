import { Gallery } from './gallery';
import { Token } from './token';
import { User } from './user';

export type IGetGalleriesByUser = (user: User) => Gallery[]

export type IGetGalleriesByToken = (token: Token) => Gallery[]
