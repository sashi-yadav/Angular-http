import { TestBed } from '@angular/core/testing';

import { RecordDataService } from './record-data.service';

describe('RecordDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecordDataService = TestBed.get(RecordDataService);
    expect(service).toBeTruthy();
  });
});
