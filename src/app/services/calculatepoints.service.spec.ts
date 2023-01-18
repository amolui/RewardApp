import { TestBed } from '@angular/core/testing';

import { CalculatepointsService } from './calculatepoints.service';

describe('CalculatepointsService', () => {
  let service: CalculatepointsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatepointsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
