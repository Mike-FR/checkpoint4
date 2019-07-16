import { TestBed } from '@angular/core/testing';

import { DbWildCircusService } from './db-wild-circus.service';

describe('DbWildCircusService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DbWildCircusService = TestBed.get(DbWildCircusService);
    expect(service).toBeTruthy();
  });
});
