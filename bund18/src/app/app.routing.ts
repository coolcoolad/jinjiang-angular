import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { SelectivePreloadingStrategy } from './selective-preloading-strategy';

import { StartComponent } from './start/start.component';
import { HintComponent } from './hint/hint.component';
import { HintEnComponent } from './hintEn/hint.component';
import { SelectComponent } from './select/select.component';
import { SelectEnComponent } from './selectEn/select.component';
import { DisplayComponent } from './display/display.component';
import { DisplayEnComponent } from './displayEn/display.component';
import { ShareComponent } from './share/share.component';
import { ShareEnComponent } from './shareEn/share.component';
import { EndComponent } from './end/end.component';
import { EndEnComponent } from './endEn/end.component';
import { ShareCardComponent } from './shareCard/shareCard.component';

const appRoutes: Routes = [
  { path: '', pathMatch:'full', component:StartComponent },
  { path: 'bund18/start', pathMatch:'full', redirectTo: ''},
  { path: 'bund18/hint', pathMatch:'full', component:HintComponent},
  { path: 'bund18/hintEn', pathMatch:'full', component:HintEnComponent},
  { path: 'bund18/select', pathMatch:'full', component:SelectComponent},
  { path: 'bund18/selectEn', pathMatch:'full', component:SelectEnComponent},
  { path: 'bund18/display/:imgSrc', pathMatch:'full', component: DisplayComponent },
  { path: 'bund18/displayEn/:imgSrc', pathMatch:'full', component: DisplayEnComponent },
  { path: 'bund18/share' , pathMatch:'full', component:ShareComponent},
  { path: 'bund18/shareEn' , pathMatch:'full', component:ShareEnComponent},
  { path: 'bund18/end' , pathMatch:'full', component:EndComponent},
  { path: 'bund18/endEn' , pathMatch:'full', component:EndEnComponent},
  { path: 'bund18/shareCard/:id', pathMatch:'full', component: ShareCardComponent },

  { path: '**', redirectTo: '' },
];

export const routing = RouterModule.forRoot(
  appRoutes, {
    preloadingStrategy: PreloadAllModules
  });