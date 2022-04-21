import { TestBed } from '@angular/core/testing';

import { NominationSearchFacadeService } from './nomination-search-facade.service';

describe('NominationSearchFacadeService', () => {
  let service: NominationSearchFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NominationSearchFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
