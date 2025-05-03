import {
  Component,
  ElementRef,
  HostBinding,
  OnInit,
  OnDestroy,
  Renderer2

} from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { ResponsiveService } from '@services/responsive.service';
import { ProjectInfo } from '@data/types/project-info';

@Component({
  selector: 'app-projects',
  imports: [
    CommonModule,
    FontAwesomeModule

  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'

})
export class ProjectsComponent implements OnInit, OnDestroy {
  @HostBinding("style.--height-host-projects") height_host_projects!: string;
  @HostBinding("style.--height-flex-projects-projects") height_flex_projects_projects!: string;

  protected readonly path: string = "assets/imgs/portfolio-img.png";

  private readonly XSMALL = '(max-width: 599px)';
  private readonly SMALL = '(min-width: 600px) and (max-width: 749px)';
  private readonly MEDIUM = '(min-width: 750px) and (max-width: 969px)';
  private readonly LARGE = '(min-width: 970px) and (max-width: 1199px)';

  private sub!: Subscription;

  protected show_options: boolean = false;

  protected readonly faGithub = faGithub;
  protected readonly faEye = faEye;

  protected readonly project_info: Array<ProjectInfo> = [
    {
      id: 0,
      path: "assets/imgs/portfolio-img.png",
      title: "Portfolio",
      altText: "Projeto Portfolio",
      isDisabledButtonProject: false,
      isDisabledButtonRepo: false,
      linkProject: "#",
      linkRepo: "#"

    },
    {
      id: 1,
      path: "assets/imgs/mais-projetos-em-breve.png",
      title: "Sem Projeto",
      altText: "Projeto Vazia",
      isDisabledButtonProject: true,
      isDisabledButtonRepo: true,
      linkProject: "#",
      linkRepo: "#"

    },
    {
      id: 2,
      path: "assets/imgs/mais-projetos-em-breve.png",
      title: "Sem Projeto",
      altText: "Projeto Vazio",
      isDisabledButtonProject: true,
      isDisabledButtonRepo: true,
      linkProject: "#",
      linkRepo: "#"

    }

  ];

  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    private responsive$: ResponsiveService

  ) {}

  ngOnInit(): void {
    this.sub = this.responsive$.onBreakpointChange().subscribe((state) => {
      if (state.breakpoints[this.XSMALL]) {
        this.height_host_projects = "1350px";
        this.height_flex_projects_projects = "1080px";

      }
      else if (state.breakpoints[this.SMALL]) {
        this.height_host_projects = "1350px";
        this.height_flex_projects_projects = "1080px";

      }
      else if (state.breakpoints[this.MEDIUM]) {
        this.height_host_projects = "1350px";
        this.height_flex_projects_projects = "1080px";

      }
      else if (state.breakpoints[this.LARGE]) {
        this.height_host_projects = "1350px";
        this.height_flex_projects_projects = "1080px";

      }
      else {
        this.height_host_projects = "900px";
        this.height_flex_projects_projects = "700px";

      }

    });

  }


  showOptions(index: number): void {
    this.show_options = !this.show_options;
    const project: HTMLElement = (this.el.nativeElement as HTMLElement).querySelectorAll(".project")[index] as HTMLElement;
    this.renderer.addClass(project, "project-options_active");

  }

  hiddeOptions(index: number): void {    this.show_options = !this.show_options;
    const project: HTMLElement = (this.el.nativeElement as HTMLElement).querySelectorAll(".project")[index] as HTMLElement;
    this.renderer.removeClass(project, "project-options_active");

  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();

    }

  }

}
