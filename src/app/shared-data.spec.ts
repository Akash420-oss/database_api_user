import { TestBed } from '@angular/core/testing';

import { SharedData } from './shared-data';

describe('SharedData', () => {
  let service: SharedData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
