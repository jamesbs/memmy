
import { RequestData } from './request-data';

export type RoutedRequest<T> = (args?: T) => RequestData
