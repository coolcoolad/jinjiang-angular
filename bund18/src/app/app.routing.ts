import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { StartComponent } from './start/start.component';
import { HintComponent } from './hint/hint.component';
import { SelectComponent } from './select/select.component';
import { DisplayComponent } from './display/display.component';
import { ShareComponent } from './share/share.component';
import { EndComponent } from './end/end.component';

const appRoutes: Routes = [
  { path: '', pathMatch:'full', component:StartComponent },
  { path: 'bund18/start', pathMatch:'full', redirectTo: ''},
  { path: 'bund18/hint', pathMatch:'full', component:HintComponent},
  { path: 'bund18/select', pathMatch:'full', component:SelectComponent},
  { path: 'bund18/display/:imgSrc', pathMatch:'full', component: DisplayComponent },
  { path: 'bund18/share' , pathMatch:'full', component:ShareComponent},
  { path: 'bund18/end' , pathMatch:'full', component:EndComponent},

  { path: '**', redirectTo: '' },
];

export const routing = RouterModule.forRoot(
  appRoutes, {
    preloadingStrategy: PreloadAllModules
  });