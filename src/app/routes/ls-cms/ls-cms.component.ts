import { Component, inject } from '@angular/core';
import { ResolverParams } from '../../resolvers/static-resolver.resolver';
import { ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';
import { DividerComponent } from "../../components/divider/divider.component";
import { TwTagsComponent } from "../../components/tw-tags/tw-tags.component";
import { ImgDialogDirective } from '../../directives/img-dialog.directive';

@Component({
  selector: 'ls-cms',
  imports: [RouterLink, DividerComponent, TwTagsComponent, ImgDialogDirective],
  templateUrl: './ls-cms.component.html',
  styleUrl: './ls-cms.component.scss',
})
export class LsCmsComponent {

  resolved: { title: string; tags: string[]; } = this.route.snapshot.data['data'];

  constructor(
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
  }

  static async resolve(params: ResolverParams) {
    const title = 'Gateshead Learning and Skills CMS';
    const tags = ['Full Stack', 'TypeScript', 'LoopBack', 'Angular', 'SSR', 'MySQL', 'OpenAPI', 'WCAG', 'HubSpot', 'ZAP'];
    params.seo.setHead(params.url,
      title,
      '',
      tags
    );
    return { title, tags };
  }
}

