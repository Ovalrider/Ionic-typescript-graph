import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GraphPageRoutingModule } from './graph-routing.module';

import { GraphPage } from './graph.page';
import { HeaderModule } from '../header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GraphPageRoutingModule,
    HeaderModule
  ],
  declarations: [GraphPage]
})
export class GraphPageModule {}
