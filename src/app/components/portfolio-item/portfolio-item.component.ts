import { Component, ElementRef, Input } from '@angular/core';
import { TwTagComponent } from '../tw-tag/tw-tag.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'portfolio-item',
  imports: [TwTagComponent, RouterLink],
  templateUrl: './portfolio-item.component.html',
  styleUrl: './portfolio-item.component.scss'
})
export class PortfolioItemComponent {
  @Input() date: string = '';
  @Input() title: string = '';
  @Input() imgSrc: string = '';
  @Input() tags: string[] = [];
  @Input() link?: string = '';

  @Input()
  set externalUrl(value: string | undefined) {
    if (value) {
      this.link = undefined;
      setTimeout(() => {
        const anchor = this.el.nativeElement.querySelector('a');
        if (anchor) {
          anchor.setAttribute('href', value);
        }
      });
    }
  }

  constructor(
    private el: ElementRef
  ) { }


}
