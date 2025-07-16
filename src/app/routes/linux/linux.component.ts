import { Component } from '@angular/core';
import { ResolverParams } from '../../resolvers/static-resolver.resolver';
import { ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';
import { DividerComponent } from "../../components/divider/divider.component";
import { TwTagsComponent } from "../../components/tw-tags/tw-tags.component";

@Component({
  selector: 'linux',
  imports: [TwTagsComponent],
  templateUrl: './linux.component.html',
  styleUrl: './linux.component.scss'
})
export class LinuxComponent {

  resolved: { title: string; tags: string[]; } = this.route.snapshot.data['data'];

  constructor(
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
  }

  static async resolve(params: ResolverParams) {
    const title = 'Linux Servers';
    const tags = ['Ubuntu', 'CentOS', 'iptables', 'S3', 'Nginx', 'Apache', 'Node.js'];
    params.seo.setHead(params.url,
      title,
      '',
      tags
    );
    return { title, tags };
  }
}
