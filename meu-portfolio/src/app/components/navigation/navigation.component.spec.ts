import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationComponent } from './navigation.component';

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigationComponent]

    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 1200

    });
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();

  });

  it("should click on the button when the screen is small", () => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 650
    });

    window.dispatchEvent(new Event('resize'));
    component.isSmallScreen = true;
    fixture.detectChanges();

    const menuButton = fixture.nativeElement.querySelector(".container-menu-icon");
    menuButton.click();
    fixture.detectChanges();

    expect(component.hidden_menu).toBeTruthy();

  });


  it("should click on the image", () => {
    const image = fixture.nativeElement.querySelector(".container-img");
    console.log(image);
    image.click();
    fixture.detectChanges();
    expect(component.isZoomImage).toBeTruthy();

  });

});
