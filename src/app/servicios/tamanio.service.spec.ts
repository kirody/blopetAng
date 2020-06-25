import { TestBed } from '@angular/core/testing';

import { TamanioService } from './tamanio.service';

describe('TamaniosService', () => {
  let service: TamanioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TamanioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
