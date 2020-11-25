import { TestBed } from '@angular/core/testing';

import { PageLeaveGuardGuard } from './page-leave-guard.guard';

describe('PageLeaveGuardGuard', () => {
  let guard: PageLeaveGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PageLeaveGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
