import { CommonModule } from '@angular/common';
import {
  Component,
  OnInit,
  OnDestroy,
  HostBinding

} from '@angular/core';
import { ResponsiveService } from '../../services/responsive.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-about-me',
  imports: [
    CommonModule

  ],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent implements OnInit, OnDestroy {
  @HostBinding("style.--width-card-about-me") width_card_about_me!: string;
  @HostBinding("style.--left-right-card-about-me") left_right_card_about_me!: string;

  private readonly XSMALL = '(max-width: 599px)';
  private readonly SMALL = '(min-width: 600px) and (max-width: 749px)';
  private readonly MEDIUM = '(min-width: 750px) and (max-width: 969px)';
  private readonly LARGE = '(min-width: 970px) and (max-width: 1199px)';

  protected isSmallScreen!: boolean;

  protected readonly icon1_path: string = "assets/imgs/profile.png";
  protected readonly icon2_path: string = "assets/imgs/settings.png";
  protected readonly icon3_path: string = "assets/imgs/html.png";

  private sub!: Subscription

  constructor(
    private responsive$: ResponsiveService

  ) {}

  ngOnInit(): void {
      this.sub = this.responsive$.onBreakpointChange().subscribe((state) => {
      if (state.breakpoints[this.XSMALL]) {
        this.width_card_about_me = "88%";
        this.left_right_card_about_me = "10px";

      }
      else if (state.breakpoints[this.SMALL]) {
        this.width_card_about_me = "80%";
        this.left_right_card_about_me = "50px";

      }
      else if (state.breakpoints[this.MEDIUM]) {
        this.width_card_about_me = "70%";
        this.left_right_card_about_me = "88px";

      }
      else if (state.breakpoints[this.LARGE]) {
        this.width_card_about_me = "55%";
        this.left_right_card_about_me = "88px";

      }
      else {
        this.width_card_about_me = "40%";
        this.left_right_card_about_me = "88px";

      }

    });

  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();

    }

  }


}
