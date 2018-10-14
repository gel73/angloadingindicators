import { TestBed } from '@angular/core/testing';

import { LoaderInterceptorService } from './loaderinterceptor.service';

describe('LoaderinterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoaderInterceptorService = TestBed.get(LoaderInterceptorService);
    expect(service).toBeTruthy();
  });
});
