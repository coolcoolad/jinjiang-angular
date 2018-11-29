import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { Bund18Component } from './bund18/bund18.component';
import { Bund18recordComponent } from './bund18record/bund18record.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DisplayComponent } from './display/display.component';
import { ShareComponent } from './share/share.component';

const appRoutes: Routes = [
  { path: '', component:WelcomeComponent },
  { path: 'bund18/welcome', redirectTo: ''},
  { path: 'bund18/shake', component: Bund18Component },
  { path: 'bund18/display', component: DisplayComponent },
  { path: 'bund18/share' , component:ShareComponent},
  { path: 'bund18/records', component: Bund18recordComponent },
];

export const routing = RouterModule.forRoot(
  appRoutes, {
    preloadingStrategy: PreloadAllModules
  });