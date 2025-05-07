import { CommonModule } from '@angular/common';
import {
  Component,
  HostBinding,
  OnInit,
  OnDestroy

} from '@angular/core';
import { ResponsiveService } from '@services/responsive.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-about-this-project',
  imports: [
    CommonModule

  ],
  templateUrl: './about-this-project.component.html',
  styleUrl: './about-this-project.component.scss'
})
export class AboutThisProjectComponent implements OnInit, OnDestroy {
  @HostBinding("style.--height-host-about-this-project") height_host_about_this_project!: string;
  @HostBinding("style.--height-ul-about-this-project") height_ul_about_this_project!: string;
  @HostBinding("style.--grid-template-columns-ul-about-this-project") grid_template_columns_ul_about_this_project!: string;

  private readonly XSMALL = '(max-width: 599px)';
  private readonly SMALL = '(min-width: 600px) and (max-width: 749px)';
  private readonly MEDIUM = '(min-width: 750px) and (max-width: 969px)';
  private readonly LARGE = '(min-width: 970px) and (max-width: 1199px)';

  private sub!: Subscription;

  constructor(
    private responsive$: ResponsiveService

  ) {}

  ngOnInit(): void {
    this.sub = this.responsive$.onBreakpointChange().subscribe((state) => {
      if (state.breakpoints[this.XSMALL]) {
        this.height_host_about_this_project = "1890px";
        this.height_ul_about_this_project =  "1670px";
        this.grid_template_columns_ul_about_this_project = "repeat(1, 1fr)";

      }
      else if (state.breakpoints[this.SMALL]) {
        this.height_host_about_this_project = "1760px";
        this.height_ul_about_this_project =  "1500px";
        this.grid_template_columns_ul_about_this_project = "repeat(1, 1fr)";

      }
      else if (state.breakpoints[this.MEDIUM]) {
        this.height_host_about_this_project = "1110px";
        this.height_ul_about_this_project =  "800px";
        this.grid_template_columns_ul_about_this_project = "repeat(2, 1fr)";

      }
      else if (state.breakpoints[this.LARGE]) {
        this.height_host_about_this_project = "1110px";
        this.height_ul_about_this_project =  "800px";
        this.grid_template_columns_ul_about_this_project = "repeat(2, 1fr)";

      }
      else {
        this.height_host_about_this_project = "800px";
        this.height_ul_about_this_project =  "500px";
        this.grid_template_columns_ul_about_this_project = "repeat(4, 1fr)";

      }

    });

  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();

    }

  }

}
