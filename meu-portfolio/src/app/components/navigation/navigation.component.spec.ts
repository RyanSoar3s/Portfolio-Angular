import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BreakpointState } from '@angular/cdk/layout';

import { NavigationComponent } from './navigation.component';
import { ResponsiveService } from '../../services/responsive.service';
import { Observable, of } from 'rxjs';


describe('NavigationComponent', () => {
  let component: NavigationComponent;
    let fixture: ComponentFixture<NavigationComponent>;
    let mock: jest.Mocked<ResponsiveService>;

    beforeEach(async () => {
      mock = {
        onBreakpointChange: jest.fn(() => {
          return of({
            '(max-width: 599px)': false,
            '(min-width: 600px) and (max-width: 749px)': false,
            '(min-width: 750px) and (max-width: 969px)': false,
            '(min-width: 970px) and (max-width: 1199px)': false,
            '(min-width: 1200px)': true

        })

      })

    } as any as jest.Mocked<ResponsiveService>;

    await TestBed.configureTestingModule({
      imports: [NavigationComponent],
      providers: [
        { provide: ResponsiveService, useValue: mock }

      ]

    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();

  });

  it("should click on the button when the screen is small", () => {
    mock.onBreakpointChange.mockReturnValue(
      of({
        breakpoints: {
          '(max-width: 599px)': true,
          '(min-width: 600px) and (max-width: 749px)': false,
          '(min-width: 750px) and (max-width: 969px)': false,
          '(min-width: 970px) and (max-width: 1199px)': false,
          '(min-width: 1200px)': false


        }
      }) as any as Observable<BreakpointState>
    )

    component.ngOnInit();
    fixture.detectChanges();

    const icon_bars = fixture.nativeElement.querySelector(".container-menu-icon");
    icon_bars.click();

    fixture.detectChanges();

    expect(component.isSmallScreen && !component.hidden_menu).toBeTruthy();

  })

  it("should click on the image", () => {
    const image = fixture.nativeElement.querySelector(".container-img");

    image.click();
    fixture.detectChanges();
    expect(component.isZoomImage).toBeTruthy();

  });

});
