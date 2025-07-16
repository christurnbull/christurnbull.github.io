import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResolverParams } from '../../resolvers/static-resolver.resolver';
import { ImgDialogDirective } from '../../directives/img-dialog.directive';
import { TwTagsComponent } from '../../components/tw-tags/tw-tags.component';

@Component({
  selector: 'nwb',
  imports: [TwTagsComponent, ImgDialogDirective],
  templateUrl: './nwb.component.html',
  styleUrl: './nwb.component.css'
})
export class NwbComponent {

  resolved: { title: string; tags: string[]; } = this.route.snapshot.data['data'];

  constructor(
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
  }

  static async resolve(params: ResolverParams) {
    const title = 'nwb';
    const tags = ['CLI Tool', 'Node.js', 'S3', 'WordPress', 'Backup'];
    params.seo.setHead(params.url,
      title,
      'Node WordPress Backup',
      tags
    );
    return { title, tags };
  }
}
