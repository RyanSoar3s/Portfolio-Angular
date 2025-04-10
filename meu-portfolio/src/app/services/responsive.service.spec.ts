import { TestBed } from '@angular/core/testing';

import { ResponsiveService } from './responsive.service';

describe('ResponsiveService', () => {
  let service: ResponsiveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResponsiveService);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have breakpoints defined', () => {
    expect(service['XSMALL']).toBeDefined();
    expect(service['SMALL']).toBeDefined();
    expect(service['MEDIUM']).toBeDefined();
    expect(service['LARGE']).toBeDefined();
    expect(service['XLARGE']).toBeDefined();

  });

});
