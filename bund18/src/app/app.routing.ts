import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { SelectivePreloadingStrategy } from './selective-preloading-strategy';

import { StartComponent } from './start/start.component';
import { HintComponent } from './hint/hint.component';
import { SelectComponent } from './select/select.component';
import { DisplayComponent } from './display/display.component';
import { ShareComponent } from './share/share.component';
import { EndComponent } from './end/end.component';
import { ShareCardComponent } from './shareCard/shareCard.component';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', component: StartComponent },
  { path: 'start', pathMatch: 'full', redirectTo: ''},
  { path: 'hint', pathMatch: 'full', component: HintComponent},
  { path: 'select', pathMatch: 'full', component: SelectComponent},
  { path: 'display/:imgSrc', pathMatch: 'full', component: DisplayComponent },
  { path: 'share' , pathMatch: 'full', component: ShareComponent},
  { path: 'end' , pathMatch: 'full', component: EndComponent},
  { path: 'shareCard/:id', component: ShareCardComponent },

  { path: '**', redirectTo: '' },
];

export const routing = RouterModule.forRoot(
  appRoutes, {
    preloadingStrategy: PreloadAllModules
  });