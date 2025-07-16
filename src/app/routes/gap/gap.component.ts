import { Component } from '@angular/core';
import { ResolverParams } from '../../resolvers/static-resolver.resolver';
import { ActivatedRoute } from '@angular/router';
import { DividerComponent } from "../../components/divider/divider.component";
import { RouterLink } from '@angular/router';
import { TwTagsComponent } from '../../components/tw-tags/tw-tags.component';
import { ImgDialogDirective } from '../../directives/img-dialog.directive';

@Component({
  selector: 'gap',
  imports: [RouterLink, DividerComponent, TwTagsComponent, ImgDialogDirective],
  templateUrl: './gap.component.html',
  styleUrl: './gap.component.scss'
})
export class GapComponent {

  resolved: { title: string; tags: string[]; } = this.route.snapshot.data['data'];

  constructor(
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
  }

  static async resolve(params: ResolverParams) {
    const title = 'Gateshead Assessment Profile Web App';
    const tags = ['Full Stack', 'TypeScript', 'Fastify', 'Angular', 'SQLite', 'Drizzle', 'Mailjet', 'Zod', 'JWT', 'Tailwind'];
    params.seo.setHead(params.url,
      title,
      "An educational assessment platform that provides secure and accessible tools for teachers and consultants to moderate children's progress",
      tags
    );
    return { title, tags };
  }
}

