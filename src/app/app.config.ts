import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { GtmService } from './services/gtm.service';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { withInMemoryScrolling } from '@angular/router';


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withInMemoryScrolling({
      anchorScrolling: 'enabled',
      scrollPositionRestoration: 'enabled'
    })),
    provideHttpClient(),
    GtmService
  ]
};

export const siteName = 'WOW look';