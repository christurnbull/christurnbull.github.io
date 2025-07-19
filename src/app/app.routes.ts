import { Routes } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { staticResolverResolver } from './resolvers/static-resolver.resolver';
import { PageNotFoundComponent } from './routes/page-not-found/page-not-found.component';
import { VibeComponent } from './routes/vibe/vibe.component';
import { PortfolioComponent } from './routes/portfolio/portfolio.component';
import { LsCmsComponent } from './routes/ls-cms/ls-cms.component';
import { GapComponent } from './routes/gap/gap.component';
import { KaggleComponent } from './routes/kaggle/kaggle.component';
import { AppCodeComponent } from './routes/app-code/app-code.component';
import { LinuxComponent } from './routes/linux/linux.component';
import { KiowaComponent } from './routes/kiowa/kiowa.component';
import { NwbComponent } from './routes/nwb/nwb.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, resolve: { data: staticResolverResolver } },
    { path: 'portfolio', component: PortfolioComponent, resolve: { data: staticResolverResolver } },
    { path: 'vibe', component: VibeComponent, resolve: { data: staticResolverResolver } },
    { path: 'ls-cms', component: LsCmsComponent, resolve: { data: staticResolverResolver } },
    { path: 'gap', component: GapComponent, resolve: { data: staticResolverResolver } },
    { path: 'kaggle', component: KaggleComponent, resolve: { data: staticResolverResolver } },
    { path: 'app-code', component: AppCodeComponent, resolve: { data: staticResolverResolver } },
    { path: 'linux', component: LinuxComponent, resolve: { data: staticResolverResolver } },
    { path: 'kiowa', component: KiowaComponent, resolve: { data: staticResolverResolver } },
    { path: 'nwb', component: NwbComponent, resolve: { data: staticResolverResolver } },
    { path: 'not-found', component: PageNotFoundComponent, resolve: { data: staticResolverResolver } },
    { path: 'llm-bitcoin', redirectTo: '/llm-bitcoin', pathMatch: 'full' },
    { path: '**', redirectTo: '/not-found' },
];
