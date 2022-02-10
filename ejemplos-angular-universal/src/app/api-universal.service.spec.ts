import { TestBed } from '@angular/core/testing';

import { ApiUniversalService } from './api-universal.service';

describe('ApiUniversalService', () => {
  let service: ApiUniversalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiUniversalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
