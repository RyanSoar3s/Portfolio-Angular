import {
  Component,
  output,
  Renderer2,
  ViewChild,
  ElementRef,
  OnInit,
  AfterViewInit,
  OnDestroy,
  ViewEncapsulation,
  HostBinding

} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeSnippetService } from '../../services/code-snippet.service';

import { CodeSnippet } from '../../types/code-snippet';

import { TypingAnimationsService } from '../../services/typing-animations.service';
import { Subscription } from 'rxjs';
import { ResponsiveService } from '../../services/responsive.service';

@Component({
  selector: 'app-code-box',
  standalone: true,
  imports: [
    CommonModule

  ],
  templateUrl: './code-box.component.html',
  styleUrl: './code-box.component.scss',
  encapsulation: ViewEncapsulation.None

})
export class CodeBoxComponent implements OnInit, AfterViewInit, OnDestroy {
  @HostBinding("style.--flex-direction-container-code-box-code-box") flex_direction_container_code_box_code_box!: string;
  @ViewChild("htmlCode") htmlCodeParent!: ElementRef;
  @ViewChild("scssCode") scssCodeParent!: ElementRef;
  @ViewChild("tsCode") tsCodeParent!: ElementRef;

  private readonly XSMALL = '(max-width: 599px)';
  private readonly SMALL = '(min-width: 600px) and (max-width: 749px)';
  private readonly MEDIUM = '(min-width: 750px) and (max-width: 969px)';
  private readonly LARGE = '(min-width: 970px) and (max-width: 1199px)';

  private html_content: Array<HTMLElement> = [];
  private scss_content: Array<HTMLElement> = [];

  protected readonly path: string = "assets/imgs/down.png";

  private code_snippet!: Array<CodeSnippet>;
  private sub!: Subscription;

  out = output<number>();

  constructor(
    private renderer: Renderer2,
    private code_snippet_service: CodeSnippetService,
    private typing_animations_service: TypingAnimationsService,
    private responsive$: ResponsiveService

  ) {}

  ngOnInit(): void {
    this.sub = this.responsive$.onBreakpointChange().subscribe((state) => {
      if (state.breakpoints[this.XSMALL]) this.flex_direction_container_code_box_code_box = "column";
      else if (state.breakpoints[this.SMALL]) this.flex_direction_container_code_box_code_box = "column";
      else if (state.breakpoints[this.MEDIUM]) this.flex_direction_container_code_box_code_box = "column";
      else if (state.breakpoints[this.LARGE]) this.flex_direction_container_code_box_code_box = "column";
      else this.flex_direction_container_code_box_code_box = "row";

    });



  }

  ngAfterViewInit(): void {
    this.code_snippet = this.code_snippet_service.getSnippet();

    let delay: number = 0;
    let isClear: boolean = true;

    this.code_snippet.forEach((snippet, index) => {
      this.typingSnippetsAnimation(this.htmlCodeParent.nativeElement, this.html_content, snippet.html, 0, delay, delay);
      this.typingSnippetsAnimation(this.scssCodeParent.nativeElement, this.scss_content, snippet.scss, 0, delay, delay);
      this.typingSnippetsAnimation(this.tsCodeParent.nativeElement, [], snippet.ts, 0, delay, delay);



      isClear = (index >= this.code_snippet.length - 1) ? false : true;

      delay += 2 * (index + 2);

      if (isClear) {
        this.clearSnippetsAnimations(this.htmlCodeParent.nativeElement, this.html_content, snippet.html.length - 1, 0, delay, delay);
        this.clearSnippetsAnimations(this.scssCodeParent.nativeElement, this.scss_content, snippet.scss.length - 1, 0, delay, delay);

      }

      delay += 1.6 * (index + 2);

      setTimeout(() => this.emit(index + 1), (delay * 480) + (2160 * index));

    });

  }

  typingSnippetsAnimation(html: HTMLElement, listElements: Array<HTMLElement>, codes: Array<string>, index: number, delay_cursor: number, delay_typing: number): void {
    if (index < codes.length) {
      const span = this.renderer.createElement("span") as HTMLElement;
      span.innerHTML = codes[index];
      listElements.push(span);

      this.renderer.appendChild(html, span);

      const span_line = span.querySelector(".line") as HTMLElement;
      const width_span_line = span_line.innerText?.length + 1;

      delay_typing += 0.2 * index;
      delay_cursor += 0.4 * index;

      this.typing_animations_service.typingAnimation(span_line, {
        duration: (width_span_line * 10) + 500,
        iterations: (index === codes.length - 1) ? 3 : 1,
        easing: "steps(30, end)",
        delay: delay_cursor

      }, {
        duration: (width_span_line * 10) + 270,
        easing: "steps(30, end)",
        delay: delay_typing,
        fill: "forwards"

      }, width_span_line);

      this.typingSnippetsAnimation(html, listElements, codes, index + 1, delay_cursor, delay_typing);

    }

  }

  clearSnippetsAnimations(html: HTMLElement, listElements: Array<HTMLElement>, index: number, count: number, delay_cursor: number, delay_typing: number): void {
    if (index >= 0) {
      const span = listElements[index];

      const span_line: HTMLElement = span.querySelector(".line") as HTMLElement;

      const width_span_line = span_line.innerText?.length + 1;

      delay_typing += 0.3 * count;
      delay_cursor += 0.3 * count;

      this.typing_animations_service.clearTextAnimation(span_line, {
        duration: (width_span_line * 10) + 475,
        iterations: (index === 0) ? 6 : 1,
        easing: "steps(30, end)",
        delay: delay_cursor

      }, {
        duration: (width_span_line * 10) + 194.47958,
        easing: "steps(30, end)",
        delay: delay_typing,
        fill: "forwards"

      }, width_span_line);

      listElements.splice(index, 1);

      setTimeout(() => this.renderer.removeChild(html, span), delay_typing * 1200);

      this.clearSnippetsAnimations(html, listElements, index - 1, count + 1, delay_cursor, delay_typing);

    }

  }

  private emit(id: number): void {
    this.out.emit(id);

  }

  ngOnDestroy(): void {
    if (this.sub) this.sub.unsubscribe();

  }


}
