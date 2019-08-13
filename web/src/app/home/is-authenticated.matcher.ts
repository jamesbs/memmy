import { UrlSegment } from '@angular/router';
import isAuthenticated from '../model/auth/is-authenticated';

export function isAuthenticatedMatcher(segments: UrlSegment[]) {
    const pathsMatch = segments.join('') === '';

    if (pathsMatch && isAuthenticated()) {
      return { consumed: segments };
    } else {
      return null;
    }
  }
