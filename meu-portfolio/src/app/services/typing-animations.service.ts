import { Injectable } from '@angular/core';
import {
  CursorOptions,
  TypingOptions

} from '../types/animation-options';

@Injectable({
  providedIn: 'root'
})
export class TypingAnimationsService {
  public typingAnimation(html: HTMLElement, cursor_options: CursorOptions, typing_options: TypingOptions, width_text: number): void {
    // Cursor animation
    html.animate([
      { borderRight: "1px solid white" },
      { borderRight: "1px solid transparent" }

    ], {
      duration: cursor_options.duration,
      iterations: cursor_options.iterations,
      easing: cursor_options.easing,
      delay: (cursor_options.delay ?? 0) * 1000

    });

    // Typing animation
    html.animate([
      { width: "0ch" },
      { width: `${width_text}ch` }

    ], {
      duration: typing_options.duration,
      easing: typing_options.easing,
      delay: (typing_options.delay ?? 0) * 1000,
      fill: typing_options.fill

    });

  }

  public clearTextAnimation(html: HTMLElement, cursor_options: CursorOptions, typing_options: TypingOptions, width_text: number): void {
    // Cursor animation
    html.animate([
      { borderRight: "1px solid white" },
      { borderRight: "1px solid transparent" }

    ], {
      duration: cursor_options.duration,
      iterations: cursor_options.iterations,
      easing: cursor_options.easing,
      delay: (cursor_options.delay ?? 0) * 1000

    });

    // Clear text animation
    html.animate([
      { width: `${width_text}ch` },
      { width: "0ch" }

    ], {
      duration: typing_options.duration,
      easing: typing_options.easing,
      delay: (typing_options.delay ?? 0) * 1000,
      fill: typing_options.fill

    });

  }

}
