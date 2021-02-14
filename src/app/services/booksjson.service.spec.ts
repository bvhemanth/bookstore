import { TestBed } from '@angular/core/testing';

import { BooksjsonService } from './booksjson.service';

describe('BooksjsonService', () => {
  let service: BooksjsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BooksjsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
