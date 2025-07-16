import { Component, Input } from '@angular/core';
import { TwTagComponent } from '../tw-tag/tw-tag.component';
import { TwAccordionPanelComponent } from '../tw-accordion-panel/tw-accordion-panel.component';
import { TwAccordionArrowComponent } from '../tw-accordion-arrow/tw-accordion-arrow.component';


@Component({
    selector: 'cv-project',
    imports: [TwTagComponent, TwAccordionPanelComponent, TwAccordionArrowComponent],
    templateUrl: './cv-project.component.html',
    styleUrl: './cv-project.component.scss'
})
export class CvProjectComponent {

  constructor() { }

  @Input() date: string = ''
  @Input() title: string = ''
  @Input() imgSrc: string = ''
  @Input() tags: string[] = []

}
