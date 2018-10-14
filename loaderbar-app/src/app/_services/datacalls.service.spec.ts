import { TestBed } from '@angular/core/testing';

import { DataCallsService } from './datacalls.service';

describe('DatacallsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataCallsService = TestBed.get(DataCallsService);
    expect(service).toBeTruthy();
  });
});
