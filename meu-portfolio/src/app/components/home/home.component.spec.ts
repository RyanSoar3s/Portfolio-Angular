import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { provideAnimations } from '@angular/platform-browser/animations';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HomeComponent ],
      providers: [ provideAnimations() ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
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
