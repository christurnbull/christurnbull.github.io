import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { SeoService } from '../services/seo.service';
import { inject } from '@angular/core';
import { AppService } from '../services/app.service';
import { HomeComponent } from '../routes/home/home.component';
import { VibeComponent } from '../routes/vibe/vibe.component';
import { PortfolioComponent } from '../routes/portfolio/portfolio.component';
import { KaggleComponent } from '../routes/kaggle/kaggle.component';
import { GapComponent } from '../routes/gap/gap.component';
import { LsCmsComponent } from '../routes/ls-cms/ls-cms.component';
import { AppCodeComponent } from '../routes/app-code/app-code.component';
import { LinuxComponent } from '../routes/linux/linux.component';
import { KiowaComponent } from '../routes/kiowa/kiowa.component';
import { NwbComponent } from '../routes/nwb/nwb.component';

export type ResolverParams = {
  route: ActivatedRouteSnapshot; url: string; seo: SeoService; app: AppService;
};

export const staticResolverResolver: ResolveFn<Promise<any>> = async (route, state) => {

  // console.log(route, state);
  const url = state.url;
  const app = inject(AppService);
  const seo = app.seo;

  const params: ResolverParams = { route, url, seo, app };
  const path = route.routeConfig?.path;

  // app.routerInProgress = true

  let data: any = undefined;
  if (path === '') {
    data = await HomeComponent.resolve(params);
  } else if (path === 'portfolio') {
    data = await PortfolioComponent.resolve(params);
  } else if (path === 'vibe') {
    data = await VibeComponent.resolve(params);
  } else if (path === 'kaggle') {
    data = await KaggleComponent.resolve(params);
  } else if (path === 'gap') {
    data = await GapComponent.resolve(params);
  } else if (path === 'ls-cms') {
    data = await LsCmsComponent.resolve(params);
  } else if (path === 'app-code') {
    data = await AppCodeComponent.resolve(params);
  } else if (path === 'linux') {
    data = await LinuxComponent.resolve(params);
  } else if (path === 'kiowa') {
    data = await KiowaComponent.resolve(params);
  } else if (path === 'nwb') {
    data = await NwbComponent.resolve(params);
  }

  // app.routerInProgress = false
  return data;
};
