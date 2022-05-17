import { TestBed } from '@angular/core/testing';

import { UserreposService } from './userrepos.service';

describe('UserreposService', () => {
  let service: UserreposService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserreposService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
