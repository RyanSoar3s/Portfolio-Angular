import { CommonModule } from '@angular/common';
import {
  Component,
  OnInit,
  OnDestroy,
  HostBinding

} from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {
  faBars,
  faHouse,
  faUser,
  faSitemap,
  faPhone,
  faCircleInfo

} from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { ResponsiveService } from '../../services/responsive.service';

@Component({
  selector: 'app-header',
  imports: [
    CommonModule,
    FontAwesomeModule

  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit, OnDestroy {
  @HostBinding("style.--option-display-header") option_display_header!: string;
  @HostBinding("style.--height-width-container-image-header") height_width_container_image_header!: string;
  @HostBinding("style.--display-navigation-option-header") display_navigation_option_header!: string;

  private readonly XSMALL = '(max-width: 599px)';
  private readonly SMALL = '(min-width: 600px) and (max-width: 749px)';
  private readonly MEDIUM = '(min-width: 750px) and (max-width: 969px)';
  private readonly LARGE = '(min-width: 970px) and (max-width: 1199px)';

  private sub!: Subscription;

  protected faBars = faBars;
  protected faHouse = faHouse;
  protected faUser = faUser;
  protected faSitemap = faSitemap;
  protected faPhone = faPhone;
  protected faCircleInfo = faCircleInfo;

  protected readonly path: string = "assets/imgs/foto-navegacao.webp";

  protected isSmallScreen: boolean = false;
  protected isOpenMenu: boolean = false;

  constructor(
    private responsive$: ResponsiveService

  ) { }

  ngOnInit(): void {
    this.sub = this.responsive$.onBreakpointChange().subscribe((state) => {
      if (state.breakpoints[this.XSMALL]) {
        this.option_display_header = "none";
        this.height_width_container_image_header = "100px";
        this.isSmallScreen = true;
        this.display_navigation_option_header = "none";
        this.isOpenMenu = false;

      }
      else if (state.breakpoints[this.SMALL]) {
        this.option_display_header = "none";
        this.height_width_container_image_header = "100px";
        this.isSmallScreen = true;
        this.display_navigation_option_header = "none";
        this.isOpenMenu = false;

      }
      else if (state.breakpoints[this.MEDIUM]) {
        this.option_display_header = "none";
        this.height_width_container_image_header = "150px";
        this.isSmallScreen = false;
        this.display_navigation_option_header = "flex";
        this.isOpenMenu = false;

      }
      else if (state.breakpoints[this.LARGE]) {
        this.option_display_header = "inline";
        this.height_width_container_image_header = "170px";
        this.isSmallScreen = false;
        this.display_navigation_option_header = "flex";
        this.isOpenMenu = false;

      }
      else {
        this.option_display_header = "inline";
        this.height_width_container_image_header = "200px";
        this.isSmallScreen = false;
        this.display_navigation_option_header = "flex";
        this.isOpenMenu = false;

      }

    });


  }

  toggleMenu(): void {
    this.isOpenMenu = !this.isOpenMenu;

    if (this.isOpenMenu) {
      this.display_navigation_option_header = "flex";


    } else {
      this.display_navigation_option_header = "none";

    }

  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();

    }

  }

}
