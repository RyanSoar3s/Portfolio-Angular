import { Component } from '@angular/core';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './components/home/home.component';
@Component({
  selector: 'app-root',
  imports: [
    NavigationComponent,
    HomeComponent

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'meu-portfolio';
}
