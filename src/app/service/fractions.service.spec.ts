import { TestBed } from '@angular/core/testing';

import { FractionsService } from './fractions.service';

describe('FractionsService', () => {
  let service: FractionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FractionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
