import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResolverParams } from '../../resolvers/static-resolver.resolver';
import { RouterLink } from '@angular/router';
import { DividerComponent } from "../../components/divider/divider.component";
import { TwTagsComponent } from "../../components/tw-tags/tw-tags.component";

@Component({
  selector: 'app-code',
  imports: [TwTagsComponent, RouterLink],
  templateUrl: './app-code.component.html',
  styleUrl: './app-code.component.scss'
})
export class AppCodeComponent {

  resolved: { title: string; tags: string[]; } = this.route.snapshot.data['data'];

  constructor(
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
  }

  static async resolve(params: ResolverParams) {
    const title = 'Application Code';
    const tags = ['TypeScript', 'C++', 'Emscripten', 'PHP', 'Python', 'WordPress'];
    params.seo.setHead(params.url,
      title,
      '',
      tags
    );
    return { title, tags };
  }
}
