import { TestBed, inject } from '@angular/core/testing';

import { UppdragService } from './uppdrag.service';

describe('UppdragService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UppdragService]
    });
  });

  it('should be created', inject([UppdragService], (service: UppdragService) => {
    expect(service).toBeTruthy();
  }));
});
