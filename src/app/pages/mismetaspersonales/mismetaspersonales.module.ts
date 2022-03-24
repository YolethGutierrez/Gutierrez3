import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MismetaspersonalesPageRoutingModule } from './mismetaspersonales-routing.module';

import { MismetaspersonalesPage } from './mismetaspersonales.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MismetaspersonalesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MismetaspersonalesPage]
})
export class MismetaspersonalesPageModule {}
