import { TestBed } from '@angular/core/testing';

import { DashGalleriesService } from './dash-galleries.service';

describe('DashGalleriesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DashGalleriesService = TestBed.get(DashGalleriesService);
    expect(service).toBeTruthy();
  });
});
