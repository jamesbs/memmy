import { TypedResponse } from '../../core/typed-response';

export type AsHttpRequest<T extends (...params: any) => any> =
  (...params: Parameters<T>) => Promise<TypedResponse<ReturnType<T>>>;
