import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutThisProjectComponent } from './about-this-project.component';

describe('AboutThisProjectComponent', () => {
  let component: AboutThisProjectComponent;
  let fixture: ComponentFixture<AboutThisProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutThisProjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutThisProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
