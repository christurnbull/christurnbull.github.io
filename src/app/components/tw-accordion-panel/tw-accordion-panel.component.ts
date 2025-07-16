import { CommonModule } from '@angular/common';
import { Component, ContentChild, ContentChildren, Input, Output } from '@angular/core';
import { TwAccordionArrowComponent } from '../tw-accordion-arrow/tw-accordion-arrow.component';

@Component({
    selector: 'tw-accordion-panel',
    imports: [CommonModule],
    templateUrl: './tw-accordion-panel.component.html',
    styleUrl: './tw-accordion-panel.component.scss'
})
export class TwAccordionPanelComponent {

  constructor() { }

  @ContentChild(TwAccordionArrowComponent) arrow!: any;
  isOpen: boolean = false;

  toggle() {
    this.isOpen = !this.isOpen;
    this.arrow.isOpen = this.isOpen
  }
}
