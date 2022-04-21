import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NominationCreateComponent } from './nomination-create/nomination-create.component';
import { NominationCreateStep1Component } from './nomination-create-step1/nomination-create-step1.component';
import { NominationCreateStep2Component } from './nomination-create-step2/nomination-create-step2.component';
import { NominationCreateHeaderComponent } from './nomination-create-header/nomination-create-header.component';
import { NominationCreateMarineDetailComponent } from './nomination-create-marine-detail/nomination-create-marine-detail.component';
import { NominationCreateSecuredSectionComponent } from './nomination-create-secured-section/nomination-create-secured-section.component';
import { NominationCreateLedgerComponent } from './nomination-create-ledger/nomination-create-ledger.component';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
    ]),
  ],
  declarations: [
    NominationCreateComponent,
    NominationCreateStep1Component,
    NominationCreateStep2Component,
    NominationCreateHeaderComponent,
    NominationCreateMarineDetailComponent,
    NominationCreateSecuredSectionComponent,
    NominationCreateLedgerComponent,
  ],
  exports: [
    NominationCreateComponent,
    NominationCreateStep1Component,
    NominationCreateStep2Component,
    NominationCreateHeaderComponent,
    NominationCreateMarineDetailComponent,
    NominationCreateSecuredSectionComponent,
    NominationCreateLedgerComponent,
  ],
})
export class NominationLightFeatureCreateModule {}
