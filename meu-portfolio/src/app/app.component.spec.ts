import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { provideAnimations } from '@angular/platform-browser/animations';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AppComponent ],
      providers: [ provideAnimations() ]
    }).compileComponents();
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

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'meu-portfolio' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('meu-portfolio');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Sou Ryan Soares </>');
  });
});
