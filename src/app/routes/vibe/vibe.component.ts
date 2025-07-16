import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResolverParams } from '../../resolvers/static-resolver.resolver';
import { RouterLink } from '@angular/router';
import { DividerComponent } from "../../components/divider/divider.component";
import { TwTagsComponent } from "../../components/tw-tags/tw-tags.component";

@Component({
  selector: 'vibe',
  imports: [TwTagsComponent],
  templateUrl: './vibe.component.html',
  styleUrl: './vibe.component.scss'
})
export class VibeComponent {

  resolved: { title: string; tags: string[]; } = this.route.snapshot.data['data'];

  constructor(
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
  }

  static async resolve(params: ResolverParams) {
    const title = 'Agentic AI and Vibe Coding';
    const tags = ['Vibe Coding', 'Agentic AI', 'Agile', 'Transformative'];
    params.seo.setHead(params.url,
      title,
      '',
      tags
    );
    return { title, tags };
  }

}
