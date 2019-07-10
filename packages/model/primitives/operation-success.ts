import { Status, getStatus } from './status';

export const operationSucceeded = 'succeeded';
export const operationFailed = 'failed';
export type OperationSuccess = 
    typeof operationSucceeded
  | typeof operationFailed;

export function hasSucceeded(result: Status<OperationSuccess>) {
  return getStatus(result) === operationSucceeded;
}

export function hasFailed(result: Status<OperationSuccess>) {
  return getStatus(result) === operationFailed;
}