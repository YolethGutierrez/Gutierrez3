import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PresentacionpersonalPageRoutingModule } from './presentacionpersonal-routing.module';

import { PresentacionpersonalPage } from './presentacionpersonal.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PresentacionpersonalPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PresentacionpersonalPage]
})
export class PresentacionpersonalPageModule {}
