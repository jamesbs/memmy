import { UrlSegment, UrlSegmentGroup, Route } from '@angular/router';
import { ServerCredentialsService } from '../model/auth/server-credentials.service';
import { appInjector } from '../app-injector';

export function isAuthenticatedMatcher(
  segments: UrlSegment[],
  _: UrlSegmentGroup,
  route: Route) {
    const serverCredentialsService = appInjector.injector.get(ServerCredentialsService);
    const pathsMatch = segments.join('') === '';

    if (pathsMatch && serverCredentialsService.isAuthenticated()) {
      return { consumed: segments };
    } else {
      return null;
    }
  }
