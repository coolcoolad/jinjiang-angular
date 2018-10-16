import { Routes, RouterModule } from '@angular/router';

import { Bund18Component } from './bund18/bund18.component';
import { Bund18recordComponent } from './bund18record/bund18record.component';

const appRoutes: Routes = [
  { path: 'bund18', component: Bund18Component },
  { path: 'bund18/records', component: Bund18recordComponent },
];

export const routing = RouterModule.forRoot(appRoutes);