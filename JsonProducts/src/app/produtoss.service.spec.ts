import { TestBed } from '@angular/core/testing';

import { ProdutossService } from './produtoss.service';

describe('ProdutossService', () => {
  let service: ProdutossService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdutossService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
