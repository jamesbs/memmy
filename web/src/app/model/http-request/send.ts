import { RoutedRequest } from './routed-request';
import { TypedResponse } from '../../core/typed-response';


export function send<T>(routedRequest: RoutedRequest<T>) {
  return <R>(args: T) => {
    const { url, options }  = routedRequest(args);

    return options 
      ? fetch(url, options) as Promise<TypedResponse<R>>
      : fetch(url) as Promise<TypedResponse<R>>;
  }
}
