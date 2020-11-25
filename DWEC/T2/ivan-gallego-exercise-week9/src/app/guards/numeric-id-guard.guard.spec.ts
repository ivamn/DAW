import { TestBed } from '@angular/core/testing';

import { NumericIdGuardGuard } from './numeric-id-guard.guard';

describe('NumericIdGuardGuard', () => {
  let guard: NumericIdGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NumericIdGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
