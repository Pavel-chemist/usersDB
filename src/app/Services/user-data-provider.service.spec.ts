import { TestBed } from '@angular/core/testing';

import { UserDataProviderService } from './user-data-provider.service';

describe('UserDataProviderService', () => {
  let service: UserDataProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserDataProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
