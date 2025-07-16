import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { ResolverParams } from '../../resolvers/static-resolver.resolver';
import { HttpClient } from '@angular/common/http';
import { AppService } from '../../services/app.service';
import { ProjectsComponent } from '../../components/projects/projects.component';
import { DividerComponent } from '../../components/divider/divider.component';
import { GtmService } from '../../services/gtm.service';

@Component({
  selector: 'route-home',
  imports: [ProjectsComponent, DividerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    public gtm: GtmService,
    // public app: AppService,
    private http: HttpClient,
  ) {
  }

  resolved: any = this.route.snapshot.data['data'];

  ngOnInit(): void {
  }

  static async resolve(params: ResolverParams) {
    params.seo.setHead(params.url, 'Home', '', []);
    // const app = params.app
    // const specificationService = inject(SpecificationService)
    // const specs = firstValueFrom(specificationService.getAllSpecification())
    // return specs
  }

}
