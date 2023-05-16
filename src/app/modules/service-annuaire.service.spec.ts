import { TestBed } from '@angular/core/testing';

import { ServiceAnnuaireService } from './service-annuaire.service';

describe('ServiceAnnuaireService', () => {
  let service: ServiceAnnuaireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceAnnuaireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
