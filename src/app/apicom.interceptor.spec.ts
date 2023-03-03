import { TestBed } from '@angular/core/testing';

import { ApicomInterceptor } from './apicom.interceptor';

describe('ApicomInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ApicomInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ApicomInterceptor = TestBed.inject(ApicomInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
