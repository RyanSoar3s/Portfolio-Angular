import { Injectable } from '@angular/core';
import { CodeSnippet } from '../types/code-snippet';

@Injectable({
  providedIn: 'root'
})
export class CodeSnippetService {

  getSnippet(): Array<CodeSnippet> {
    return [
      {
        html: [ `<span class="line"><span class="tag">&lt;h2&gt;</span><span>Olá, mundo!</span><span class="tag">&lt;/h2&gt;</span></span>` ],
        scss: [
          `<span class="line"><span class="style-tag">h2</span><span> &#123;</span></span>`,
          `<span class="line"><span class="properties"> font-size</span><span>:</span> <span class="values"> 2em</span><span>;</span></span>`,
          `<span class="line"><span class="properties"> color</span><span>:</span> <span class="values"> white</span><span>;</span><span> &#125;</span></span>`

        ],
        ts: [
          `<span class="line"><span class="keyword">import</span> &#123;</span>`,
          `<span class="line">Component...&#125; <span class="keyword">from</span><span class="string"> '&#64;angular/core'</span>;</span>`,
          `<span class="line"><span class="decorator">&#64;</span><span class="decorator-name">Component</span>(&#123;...&#125;)</span>`,
          `<span class="line"><span class="keyword">export</span> <span class="keyword">class</span> <span class="class-name">HomeComponent</span> &#123;...&#125;</span>`

        ]

      },
      {
        html: [
          `<span class="line"><span class="tag">&lt;h1&gt;</span> Sou</span>`,
          `<span class="line"> <span class="tag">&lt;span&gt;</span>Ryan Soares<span class="tag">&lt;/span&gt;</span> &lt;/&gt;</span>`,
          `<span class="line"><span class="tag">&lt;/h1&gt;</span></span>`

        ],
        scss: [
          `<span class="line"><span class="style-tag">h1 span</span><span> &#123;</span></span>`,
          `<span class="line"><span class="properties"> background</span><span>:</span><span class="function"> linear-gradient</span><span>&#40;</span></span>`,
          `<span class="line"><span><span class="param"> to right</span><span>,</span> <span class="param">#fe5038 10%</span>, <span class="param">#db280f 30%</span>,</span></span>`,
          `<span class="line"><span> <span class="param">#d20d3b 70%</span>, <span class="param">#980a52 100%</span></span><span>&#41;  &#125;</span></span>`

         ],
        ts: [ ]

      },
      {
        html: [
          `<span class="line"><span class="tag">&lt;h2&gt;</span> Desenvolvedor</span>`,
          `<span class="line"> <span class="tag">&lt;span&gt;</span>FullStack<span class="tag">&lt;/span&gt;</span> Junior</span>`,
          `<span class="line"><span class="tag">&lt;/h2&gt;</span></span>`

        ],
        scss: [
          `<span class="line"><span class="style-tag">h2 span</span><span> &#123;</span></span>`,
          `<span class="line"><span class="properties"> background</span><span>:</span><span class="function"> linear-gradient</span><span>&#40;</span></span>`,
          `<span class="line"><span><span class="param"> to left</span><span>,</span> <span class="param">#503caf 20%</span>, <span class="param">#614dc1, 50%</span>,</span></span>`,
          `<span class="line"><span> <span class="param">#639de7 70%</span>, <span class="param">#70f0fd 100%</span></span><span>&#41;  &#125;</span> </span>`

         ],
        ts: [ ]

      }

    ];

  }

}
