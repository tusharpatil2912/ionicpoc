import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PeerReviewPageRoutingModule } from './peer-review-routing.module';

import { PeerReviewPage } from './peer-review.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PeerReviewPageRoutingModule
  ],
  declarations: [PeerReviewPage]
})
export class PeerReviewPageModule {}
