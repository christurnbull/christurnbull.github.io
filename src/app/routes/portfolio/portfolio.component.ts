import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResolverParams } from '../../resolvers/static-resolver.resolver';
import { ProjectsComponent } from '../../components/projects/projects.component';

@Component({
  selector: 'portfolio',
  imports: [ProjectsComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

  resolved: any = this.route.snapshot.data['data'];

  constructor(
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
  }

  static async resolve(params: ResolverParams) {
    params.seo.setHead(params.url,
      'Portfolio',
      '',
      ['portfolio']
    );
  }
}
