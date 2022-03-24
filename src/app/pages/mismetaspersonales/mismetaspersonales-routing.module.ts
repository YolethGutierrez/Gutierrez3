import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MismetaspersonalesPage } from './mismetaspersonales.page';

const routes: Routes = [
  {
    path: '',
    component: MismetaspersonalesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MismetaspersonalesPageRoutingModule {}
