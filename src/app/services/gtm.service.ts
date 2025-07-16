import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

declare global {
    interface Window {
        dataLayer: any[];
    }
}

/**
 * Service for tracking events and page views
 * Use https://tagassistant.google.com/ for debugging
 */
@Injectable({
    providedIn: 'root'
})
export class GtmService {
    // private gtmId = window.document.getElementById('gtm-script')?.getAttribute('data-id') || '';

    constructor(private router: Router) {
        // Initialize dataLayer
        window.dataLayer = window.dataLayer || [];

        // // Track page views on route change (is now automatic)
        // this.router.events.pipe(
        //     filter(event => event instanceof NavigationEnd)
        // ).subscribe((event: NavigationEnd | any) => {
        //     // this.trackRouteView(event.urlAfterRedirects);
        // });
    }

    // // Track page views
    // trackRouteView(path: string): void {
    //     window.dataLayer.push({
    //         event: 'route_view',
    //         page_path: path,
    //         page_title: document.title
    //     });
    // }

    // Track events (clicks, form submissions, etc)
    trackEvent(eventName: string, eventParams: Record<string, any> = {}): void {
        console.log(eventName, eventParams);
        window.dataLayer.push({
            event: eventName,
            ...eventParams
        });
    }
}
