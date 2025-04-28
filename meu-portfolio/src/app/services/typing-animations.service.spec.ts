import { TestBed } from '@angular/core/testing';

import { TypingAnimationsService } from './typing-animations.service';
import { provideAnimations } from '@angular/platform-browser/animations';

describe('TypingAnimationsService', () => {
  let service: TypingAnimationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ provideAnimations() ]

    });
    service = TestBed.inject(TypingAnimationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
