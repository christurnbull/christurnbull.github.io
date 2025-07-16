import { Component, OnInit } from '@angular/core'
import { SeoService } from '../../services/seo.service'
import { RouterLink } from '@angular/router'

@Component({
    selector: 'route-page-not-found',
    imports: [RouterLink],
    templateUrl: './page-not-found.component.html',
    styleUrl: './page-not-found.component.scss'
})
export class PageNotFoundComponent implements OnInit {

  constructor(
    private seoService: SeoService,
  ) { }

  ngOnInit(): void {
    this.seoService.setHead('/page-not-found', 'Page not found', '', [])
  }

}
