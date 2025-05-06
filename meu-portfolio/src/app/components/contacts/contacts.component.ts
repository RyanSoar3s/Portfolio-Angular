import { CommonModule } from '@angular/common';
import {
  Component,
  OnInit,
  OnDestroy,
  HostBinding

} from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faGithub,
  faLinkedin,
  faWhatsapp

} from '@fortawesome/free-brands-svg-icons';

import { faAt } from '@fortawesome/free-solid-svg-icons';
import { ResponsiveService } from '@services/responsive.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contacts',
  imports: [
    CommonModule,
    FontAwesomeModule

  ],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent implements OnInit, OnDestroy {
  @HostBinding("style.--height-host-contacts") height_host_contacts!: string;

  protected readonly faGithub = faGithub;
  protected readonly faLinkedin = faLinkedin;
  protected readonly faWhatsapp = faWhatsapp;
  protected readonly faAt = faAt;

  private readonly XSMALL = '(max-width: 599px)';
  private readonly SMALL = '(min-width: 600px) and (max-width: 749px)';
  private readonly MEDIUM = '(min-width: 750px) and (max-width: 969px)';
  private readonly LARGE = '(min-width: 970px) and (max-width: 1199px)';

  private sub!: Subscription;

  constructor(private responsive$: ResponsiveService) {}

  ngOnInit(): void {
    this.sub = this.responsive$.onBreakpointChange().subscribe((state) => {
      if (state.breakpoints[this.XSMALL]) {
        this.height_host_contacts = "1400px";

      }
      else if (state.breakpoints[this.SMALL]) {
        this.height_host_contacts = "1300px";

      }
      else if (state.breakpoints[this.MEDIUM]) {
        this.height_host_contacts = "1300px";

      }
      else if (state.breakpoints[this.LARGE]) {
        this.height_host_contacts = "1200px";

      }
      else {
        this.height_host_contacts = "1000px";

      }

    });

  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();

    }

  }

}
