import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LugardeorigenPageRoutingModule } from './lugardeorigen-routing.module';

import { LugardeorigenPage } from './lugardeorigen.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LugardeorigenPageRoutingModule,
    ComponentsModule
  ],
  declarations: [LugardeorigenPage]
})
export class LugardeorigenPageModule {}
