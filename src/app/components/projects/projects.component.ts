import { Component } from '@angular/core';
import { PortfolioItemComponent } from "../portfolio-item/portfolio-item.component";

@Component({
  selector: 'projects',
  imports: [PortfolioItemComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

}
