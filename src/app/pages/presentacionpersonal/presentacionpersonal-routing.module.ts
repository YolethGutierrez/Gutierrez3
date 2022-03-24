import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PresentacionpersonalPage } from './presentacionpersonal.page';

const routes: Routes = [
  {
    path: '',
    component: PresentacionpersonalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PresentacionpersonalPageRoutingModule {}
