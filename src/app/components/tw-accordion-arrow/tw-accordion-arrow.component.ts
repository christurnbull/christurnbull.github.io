import { Component, Input } from '@angular/core';

@Component({
    selector: 'tw-accordion-arrow',
    imports: [],
    templateUrl: './tw-accordion-arrow.component.html',
    styleUrl: './tw-accordion-arrow.component.scss'
})
export class TwAccordionArrowComponent {

  constructor() { }

  isOpen: boolean = false
}
