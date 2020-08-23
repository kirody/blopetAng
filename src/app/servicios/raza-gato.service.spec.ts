import { TestBed } from '@angular/core/testing';

import { RazaGatoService } from './raza-gato.service';

describe('RazaGatoService', () => {
  let service: RazaGatoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RazaGatoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
