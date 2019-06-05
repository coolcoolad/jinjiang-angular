import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { Bund18Component } from './bund18/bund18.component';
import { Bund18recordComponent } from './bund18record/bund18record.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { StartComponent } from './start/start.component';
import { HintComponent } from './hint/hint.component';
import { DisplayComponent } from './display/display.component';
import { ShareComponent } from './share/share.component';

const appRoutes: Routes = [
  { path: '', pathMatch:'full', component:WelcomeComponent },
  { path: 'bund18/welcome', pathMatch:'full', redirectTo: ''},
  { path: 'bund18/start', pathMatch:'full', component:StartComponent},
  { path: 'bund18/hint', pathMatch:'full', component:HintComponent},
  { path: 'bund18/shake', pathMatch:'full', component: Bund18Component },
  { path: 'bund18/display', pathMatch:'full', component: DisplayComponent },
  { path: 'bund18/share' , pathMatch:'full', component:ShareComponent},
  { path: 'bund18/records', pathMatch:'full', component: Bund18recordComponent },

  { path: '**', redirectTo: '' },
];

export const routing = RouterModule.forRoot(
  appRoutes, {
    preloadingStrategy: PreloadAllModules
  });