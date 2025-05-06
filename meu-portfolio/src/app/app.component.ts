import { Component } from '@angular/core';
import { HeaderComponent } from '@components/header/header.component';
import { HomeComponent } from '@components/home/home.component';
import { AboutMeComponent } from '@components/about-me/about-me.component';
import { ProjectsComponent } from '@components/projects/projects.component';
import { ContactsComponent } from '@components/contacts/contacts.component';
@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    HomeComponent,
    AboutMeComponent,
    ProjectsComponent,
    ContactsComponent

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'meu-portfolio';
}
