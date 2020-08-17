import { TestBed } from '@angular/core/testing';

import { CircuitDataService } from './circuit-data.service';

describe('CircuitCollectionService', () => {
  let service: CircuitDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CircuitDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
