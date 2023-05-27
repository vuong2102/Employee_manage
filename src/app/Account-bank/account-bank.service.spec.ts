import { TestBed } from '@angular/core/testing';

import { AccountBankService } from './account-bank.service';

describe('AccountBankService', () => {
  let service: AccountBankService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountBankService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
