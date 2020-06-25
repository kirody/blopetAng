import { TestBed } from '@angular/core/testing';

import { RazaPerroService } from './raza-perro.service';

describe('RazaPerroService', () => {
  let service: RazaPerroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RazaPerroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
