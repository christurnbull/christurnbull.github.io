import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResolverParams } from '../../resolvers/static-resolver.resolver';
import { TwTagsComponent } from '../../components/tw-tags/tw-tags.component';
import { ImgDialogDirective } from '../../directives/img-dialog.directive';

@Component({
  selector: 'kiowa',
  imports: [TwTagsComponent, ImgDialogDirective],
  templateUrl: './kiowa.component.html',
  styleUrl: './kiowa.component.css'
})
export class KiowaComponent {

  resolved: { title: string; tags: string[]; } = this.route.snapshot.data['data'];

  constructor(
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
  }

  static async resolve(params: ResolverParams) {
    const title = 'kiowa';
    const tags = ['CLI Tool', 'Apache', 'iptables', 'Bot Detection', 'Log Analysis'];
    params.seo.setHead(params.url,
      title,
      'Advanced Web Server Security & Log Analysis Tool',
      tags
    );
    return { title, tags };
  }
}
