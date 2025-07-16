import { Component, Input } from '@angular/core';
import { TwTagComponent } from '../tw-tag/tw-tag.component';

@Component({
  selector: 'tw-tags',
  imports: [TwTagComponent],
  templateUrl: './tw-tags.component.html',
  styleUrl: './tw-tags.component.css'
})
export class TwTagsComponent {

  @Input() tags: string[] = [];

}
