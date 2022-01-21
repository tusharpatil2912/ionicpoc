import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeerReviewPage } from './peer-review.page';

const routes: Routes = [
  {
    path: '',
    component: PeerReviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeerReviewPageRoutingModule {}
