import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RemoteEntryComponent } from './entry.component';

@NgModule({
  declarations: [RemoteEntryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: RemoteEntryComponent,
      },
      {
        path: 'create',
        pathMatch: 'full',
        loadChildren: () =>
          import('@mfe-client/nomination-light/feature-create').then(
            (m) => m.NominationLightFeatureCreateModule
          ),
      },
    ]),
  ],
  providers: [],
})
export class RemoteEntryModule {}
