import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LugardeorigenPage } from './lugardeorigen.page';

const routes: Routes = [
  {
    path: '',
    component: LugardeorigenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LugardeorigenPageRoutingModule {}
