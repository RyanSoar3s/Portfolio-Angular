import { CommonModule } from '@angular/common';
import {
  Component,
  OnInit,
  OnDestroy,
  HostBinding,
  viewChild,
  ElementRef,
  Renderer2

} from '@angular/core';
import { CodeBoxComponent } from '@components/code-box/code-box.component';
import { ResponsiveService } from '@services/responsive.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    CodeBoxComponent

  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'

})
export class HomeComponent implements OnInit, OnDestroy {
  @HostBinding("style.--font-size-home-content-home") font_size_home_content_home!: string;

  private home_content = viewChild<ElementRef>("homeContent")

  private readonly XSMALL = '(max-width: 599px)';
  private readonly SMALL = '(min-width: 600px) and (max-width: 749px)';
  private readonly MEDIUM = '(min-width: 750px) and (max-width: 969px)';
  private readonly LARGE = '(min-width: 970px) and (max-width: 1199px)';

  private sub!: Subscription;

  protected id!: number;

  hidden_menu: boolean = true;
  isZoomImage: boolean = false;
  isSmallScreen: boolean = false;

  constructor(
    private responsive$: ResponsiveService,
    private renderer: Renderer2

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

  showText(id: number): void {
    const title = this.home_content()?.nativeElement.querySelector(`[title-${id}]`);
    this.renderer.addClass(title, "title");

  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();

    }

  }

}
