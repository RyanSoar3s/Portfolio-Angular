import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    HomeComponent,
    AboutMeComponent

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'meu-portfolio';
}
