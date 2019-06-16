import { TestBed } from '@angular/core/testing';

import { ServerCredentialsService } from './server-credentials.service';

describe('ServerCredentialsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServerCredentialsService = TestBed.get(ServerCredentialsService);
    expect(service).toBeTruthy();
  });
});
