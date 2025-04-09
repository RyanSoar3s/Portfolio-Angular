import { Component, OnInit, OnDestroy } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faHouse,
  faUser,
  faAtom,
  faSitemap,
  faPhone,
  faCircleInfo

} from "@fortawesome/free-solid-svg-icons"
import { ResponsiveService } from '../../services/responsive.service';

@Component({
  selector: 'app-navigation',
  imports: [
    FontAwesomeModule

  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent implements OnInit, OnDestroy {
  protected faHouse = faHouse;
  protected faUser = faUser;
  protected faAtom = faAtom;
  protected faSitemap = faSitemap;
  protected faPhone = faPhone;
  protected faCircleInfo = faCircleInfo;

  constructor(
    private responsive$: ResponsiveService

  ) { }

  ngOnDestroy(): void {

  }
  ngOnInit(): void {

  }

}
