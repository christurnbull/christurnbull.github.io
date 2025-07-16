import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResolverParams } from '../../resolvers/static-resolver.resolver';
import { DividerComponent } from '../../components/divider/divider.component';
import { TwTagsComponent } from '../../components/tw-tags/tw-tags.component';

@Component({
  selector: 'kaggle',
  imports: [DividerComponent, TwTagsComponent],
  templateUrl: './kaggle.component.html',
  styleUrl: './kaggle.component.scss'
})
export class KaggleComponent {

  resolved: { title: string; tags: string[]; } = this.route.snapshot.data['data'];

  constructor(
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void { }

  static async resolve(params: ResolverParams) {
    const title = 'Kaggle AI Competition Platform';
    const tags = ['Kaggle', 'Python', 'AI', 'Machine Learning', 'Pytorch'];
    params.seo.setHead(params.url,
      title,
      'Experience of competiting in Kaggle AI competitions',
      tags
    );
    return { title, tags };
  }
}
