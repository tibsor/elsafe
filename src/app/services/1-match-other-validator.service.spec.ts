import { TestBed } from '@angular/core/testing';

import { 1MatchOtherValidatorService } from './1-match-other-validator.service';

describe('1MatchOtherValidatorService', () => {
  let service: 1MatchOtherValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(1MatchOtherValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
