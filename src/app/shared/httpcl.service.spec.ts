import { TestBed } from '@angular/core/testing';

import { HttpclService } from './httpcl.service';

describe('HttpclService', () => {
  let service: HttpclService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpclService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
