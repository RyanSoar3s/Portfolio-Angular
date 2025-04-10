import {
  Component,
  ViewChild,
  HostBinding,
  ElementRef,
  Renderer2,
  OnInit,
  OnDestroy

} from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faHouse,
  faUser,
  faAtom,
  faSitemap,
  faPhone,
  faCircleInfo,
  faXmark,
  faBars

} from "@fortawesome/free-solid-svg-icons"
import { ResponsiveService } from '../../services/responsive.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navigation',
  imports: [
    CommonModule,
    FontAwesomeModule

  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent implements OnInit, OnDestroy {
  @ViewChild("menu") menu!: ElementRef;
  @HostBinding("style.--width-container-navigation") width_container_navigation!: string;
  @HostBinding("style.--font-size-h1-navigation") font_size_h1!: string;

  protected faHouse = faHouse;
  protected faUser = faUser;
  protected faAtom = faAtom;
  protected faSitemap = faSitemap;
  protected faPhone = faPhone;
  protected faCircleInfo = faCircleInfo;
  protected faXmark = faXmark;
  protected faBars = faBars;

  private readonly XSMALL = '(max-width: 599px)';
  private readonly SMALL = '(min-width: 600px) and (max-width: 749px)';
  private readonly MEDIUM = '(min-width: 750px) and (max-width: 969px)';
  private readonly LARGE = '(min-width: 970px) and (max-width: 1199px)';

  private sub!: Subscription;

  protected hidden_menu: boolean = true;
  protected isSmallScreen: boolean = false;
  protected isZoomImage: boolean = false;

  protected readonly path: string = "assets/foto-navegacao.webp";

  constructor(
    private responsive$: ResponsiveService,
    private renderer: Renderer2

  ) { }

  ngOnInit(): void {
    this.sub = this.responsive$.onBreakpointChange().subscribe((state) => {
      if (state.breakpoints[this.XSMALL]) {
        this.hidden_menu = true;
        this.isSmallScreen = true;
        this.width_container_navigation = "450px";
        this.font_size_h1 = "1.3em";

      }
      else if (state.breakpoints[this.SMALL]) {
        this.hidden_menu = true;
        this.isSmallScreen = true;
        this.width_container_navigation = "450px";
        this.font_size_h1 = "1.3em";

      }
      else if (state.breakpoints[this.MEDIUM]) {
        this.hidden_menu = false;
        this.isSmallScreen = false;
        this.width_container_navigation = "300px";
        this.font_size_h1 = "1.0em";

      }
      else if (state.breakpoints[this.LARGE]) {
        this.hidden_menu = false;
        this.isSmallScreen = false;
        this.width_container_navigation = "400px";
        this.font_size_h1 = "1.2em";

      }
      else {
        this.hidden_menu = false;
        this.isSmallScreen = false;
        this.width_container_navigation = "450px";
        this.font_size_h1 = "1.3em";

      }

    });

  }

  toggleMenu(): void {
    if (this.hidden_menu) this.renderer.removeClass(this.menu.nativeElement, "hidden-menu");

    else this.renderer.addClass(this.menu.nativeElement, "hidden-menu");

    this.hidden_menu = !this.hidden_menu;

  }

  toggleZoomImage(): void {
    this.isZoomImage = !this.isZoomImage;

  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();

    }

  }

}
