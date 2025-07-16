import { Injectable, Inject, Optional, PLATFORM_ID, DOCUMENT } from '@angular/core';

import { Title, Meta } from '@angular/platform-browser';


@Injectable({
	providedIn: 'root'
})
export class SeoService {

	constructor(
		@Inject(DOCUMENT) private doc: Document,
		private titleService: Title,
		private metaService: Meta,
	) {
		this.canonicalUrlEl = this.doc.querySelector('link[rel="canonical"]')
	}

	titleSeparator: string = ' | '
	canonicalUrlEl: HTMLLinkElement | null

	set siteName(data) {
		this.#siteName = data || ''
		this.metaService.updateTag({ property: 'og:site_name', content: this.#siteName })
		const metaEl = this.metaService.getTag('property="og:title"')
		if (metaEl) {
			const attr = metaEl.attributes.getNamedItem('content')
			if (attr) {
				this.setTitle(attr.value)
			}
		}
	}
	get siteName() { return this.#siteName }
	#siteName: string = ''

	set twitterSite(data) {
		this.#twitterSite = data
		this.metaService.updateTag({ name: 'twitter:site', content: this.#twitterSite })
	}
	get twitterSite() { return this.#twitterSite }
	#twitterSite: string = ''



	setHead(
		url: string, title: string = '',
		description: string = '',
		keywords: string[] = [],
		imageUrl: string = ''
	) {
		this.setTitle(title)
		this.setDescription(description)
		this.setKeywords(keywords)
		this.setCanonicalUrl(url)
		this.setImageUrl(imageUrl)
	}

	setTitle(title: string = '', truncate: number = 60) {
		let wholeTitle = [this.siteName, this.titleSeparator, title].join('')
		if (truncate > 0) { wholeTitle = wholeTitle.substring(0, truncate) }
		this.titleService.setTitle(wholeTitle)
		this.metaService.updateTag({ property: 'og:title', content: title })
	}
	setDescription(description: string = '', truncate: number = 155) {
		if (truncate > 0) { description = description.substring(0, truncate) }
		this.metaService.updateTag({ name: 'description', content: description })
		this.metaService.updateTag({ property: 'og:description', content: description })
	}
	setKeywords(keywords: string[] = []) {
		this.metaService.updateTag({ name: 'keywords', content: keywords.join(',') })
	}
	setCanonicalUrl(url: string = '') {
		if (!this.canonicalUrlEl) { return }
		const canonical = window.location.origin + url
		this.canonicalUrlEl.setAttribute('href', canonical);
		this.metaService.updateTag({ property: 'og:url', content: canonical })
	}
	setImageUrl(url: string = '') {
		this.metaService.updateTag({ property: 'og:image', content: url })
	}
}