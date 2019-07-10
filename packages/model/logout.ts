import { OperationSuccess } from './primitives/operation-success';
import { Status } from './primitives/status';
import { Token } from './token';

export type ILogout = (token: Token) => Status<OperationSuccess>;