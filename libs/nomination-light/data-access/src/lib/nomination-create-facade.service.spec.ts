import { TestBed } from '@angular/core/testing';

import { NominationCreateFacadeService } from './nomination-create-facade.service';

describe('NominationCreateFacadeService', () => {
  let service: NominationCreateFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NominationCreateFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
