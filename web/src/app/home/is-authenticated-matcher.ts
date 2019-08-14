import { UrlSegment } from '@angular/router';
import isAuthenticated, { IsAuthenticatedProvider } from '../model/auth/is-authenticated';
import { Provider } from '../core/provider';

export const isAuthenticatedMatcherContainer = (checkIsAuthenticated: IsAuthenticatedProvider) => 
  (segments: UrlSegment[]) => {
    const pathsMatch = segments.join('') === '';
  
    if (pathsMatch && checkIsAuthenticated()) {
      return { consumed: segments };
    } else {
      return null;
    }
  }
  
export type IsAuthenticatedMatcher = ReturnType<typeof isAuthenticatedMatcherContainer>
export type IsAuthenticatedMatcherProvider = Provider<ReturnType<IsAuthenticatedMatcher>, Parameters<IsAuthenticatedMatcher>>

export default isAuthenticatedMatcherContainer(isAuthenticated)