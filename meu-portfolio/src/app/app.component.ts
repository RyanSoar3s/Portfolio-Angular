import {
  Component,
  ElementRef,
  viewChildren

} from '@angular/core';
import { HeaderComponent } from '@components/header/header.component';
import { HomeComponent } from '@components/home/home.component';
import { AboutMeComponent } from '@components/about-me/about-me.component';
import { ProjectsComponent } from '@components/projects/projects.component';
import { ContactsComponent } from '@components/contacts/contacts.component';
import { AboutThisProjectComponent } from '@components/about-this-project/about-this-project.component';
import { FooterComponent } from '@components/footer/footer.component';
import { ViewportScroller } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    HomeComponent,
    AboutMeComponent,
    ProjectsComponent,
    ContactsComponent,
    AboutThisProjectComponent,
    FooterComponent

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'meu-portfolio';

  private components = viewChildren<string, ElementRef<HTMLElement>>("components", { read: ElementRef<HTMLElement> })

  constructor(
    private viewportScroll: ViewportScroller

  ) {}

  protected scroll(id: number): void {
    const component = this.components()[id].nativeElement;
    this.viewportScroll.scrollToPosition([ 0, component.offsetTop - 150 ]);

  }

}
