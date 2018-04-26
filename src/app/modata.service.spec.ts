import { TestBed, inject } from '@angular/core/testing';

import { ModataService } from './modata.service';

describe('ModataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModataService]
    });
  });

  it('should be created', inject([ModataService], (service: ModataService) => {
    expect(service).toBeTruthy();
  }));
});
