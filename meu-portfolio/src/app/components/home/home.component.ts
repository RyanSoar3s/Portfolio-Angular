import { CommonModule } from '@angular/common';
import {
  Component,
  OnInit,
  OnDestroy,
  HostBinding

} from '@angular/core';
import { Subscription } from 'rxjs';
import { ResponsiveService } from '../../services/responsive.service';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule

  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'

})
export class HomeComponent implements OnInit, OnDestroy {
  @HostBinding("style.--font-size-home-content-home") font_size_home_content_home!: string;

  private readonly XSMALL = '(max-width: 599px)';
  private readonly SMALL = '(min-width: 600px) and (max-width: 749px)';
  private readonly MEDIUM = '(min-width: 750px) and (max-width: 969px)';
  private readonly LARGE = '(min-width: 970px) and (max-width: 1199px)';

  private sub!: Subscription;


  hidden_menu: boolean = true;
  isZoomImage: boolean = false;
  isSmallScreen: boolean = false;

  constructor(
    private responsive$: ResponsiveService

  ) { }

  ngOnInit(): void {
    this.sub = this.responsive$.onBreakpointChange().subscribe((state) => {
      if (state.breakpoints[this.XSMALL]) {
        this.isSmallScreen = true;
        this.font_size_home_content_home = "13px";

      }
      else if (state.breakpoints[this.SMALL]) {
        this.isSmallScreen = true;

        this.font_size_home_content_home = "18px";

      }
      else if (state.breakpoints[this.MEDIUM]) {
        this.isSmallScreen = false;
        this.font_size_home_content_home = "15px";

      }
      else if (state.breakpoints[this.LARGE]) {
        this.isSmallScreen = false;
        this.font_size_home_content_home = "18px";

      }
      else {
        this.isSmallScreen = false;
        this.font_size_home_content_home = "22px";

      }

    });

  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();

    }

  }

}
