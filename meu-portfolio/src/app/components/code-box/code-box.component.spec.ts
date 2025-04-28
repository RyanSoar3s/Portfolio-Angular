import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeBoxComponent } from './code-box.component';
import { provideAnimations } from '@angular/platform-browser/animations';

describe('CodeBoxComponent', () => {
  let component: CodeBoxComponent;
  let fixture: ComponentFixture<CodeBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ CodeBoxComponent ],
      providers: [ provideAnimations() ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodeBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeAll(() => {
    Element.prototype.animate = jest.fn().mockImplementation(() => ({
      finished: Promise.resolve(),
      cancel: jest.fn(),
      play: jest.fn(),
      pause: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn()

    }));
    
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
