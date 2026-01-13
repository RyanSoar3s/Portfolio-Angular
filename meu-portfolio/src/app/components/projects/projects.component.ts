import {
  Component,
  ElementRef,
  HostBinding,
  viewChildren,
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
import { ProjectInfo } from '@models/project-info.model';

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

  private projects = viewChildren<string, ElementRef<HTMLElement>>("projects", { read: ElementRef<HTMLElement> })

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
      path: "assets/imgs/video-streaming.png",
      title: "Video Streaming",
      languages: "Tecnologias: HTML, Tailwindcss, Angular, Express, Vercel, MongoDB",
      altText: "Projeto Video Streaming",
      isDisabledButtonProject: false,
      isDisabledButtonRepo: false,
      linkProject: "https://video-streaming-tawny-nine.vercel.app/",
      linkRepo: "https://github.com/RyanSoar3s/video-streaming"

    },
    {
      id: 1,
      path: "assets/imgs/soletre-game.png",
      title: "Soletre Game",
      languages: "Tecnologias: HTML, Tailwindcss, Angular, Express, Vercel, Redis",
      altText: "Projeto Soletre Game",
      isDisabledButtonProject: false,
      isDisabledButtonRepo: false,
      linkProject: "https://soletre-game.vercel.app/",
      linkRepo: "https://github.com/RyanSoar3s/soletre-game"

    },
    {
      id: 2,
      path: "assets/imgs/loja-online.png",
      title: "Loja Online",
      languages: "Tecnologias: HTML, Sass, TypeScript e Angular",
      altText: "Projeto Loja Online",
      isDisabledButtonProject: false,
      isDisabledButtonRepo: false,
      linkProject: "https://loja-online-peach.vercel.app/",
      linkRepo: "https://github.com/RyanSoar3s/Loja-Online"

    }

  ];

  constructor(
    private renderer: Renderer2,
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
    const project = this.projects()[index].nativeElement;
    this.renderer.addClass(project, "project-options_active");

  }

  hiddeOptions(index: number): void {
    this.show_options = !this.show_options;
    const project = this.projects()[index].nativeElement;
    this.renderer.removeClass(project, "project-options_active");

  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();

    }

  }

}
