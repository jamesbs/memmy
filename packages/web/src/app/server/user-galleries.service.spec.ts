import { TestBed } from '@angular/core/testing';

import { UserGalleriesService } from './user-galleries.service';

describe('UserGalleriesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserGalleriesService = TestBed.get(UserGalleriesService);
    expect(service).toBeTruthy();
  });
});
