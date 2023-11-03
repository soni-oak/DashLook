import { TestBed } from '@angular/core/testing';

import { ModelselectorService } from './modelselector.service';

describe('ModelselectorService', () => {
  let service: ModelselectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModelselectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
