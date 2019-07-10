export interface Status<T extends string> {
  status: T;
}

export function getStatus<T extends string>(status: Status<T>): T {
  return status.status;
}