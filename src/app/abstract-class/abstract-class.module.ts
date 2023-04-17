import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AbstractClassPageRoutingModule } from './abstract-class-routing.module';

import { AbstractClassPage } from './abstract-class.page';
import { HeaderModule } from '../header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AbstractClassPageRoutingModule,
    HeaderModule
  ],
  declarations: [AbstractClassPage]
})
export class AbstractClassPageModule {}
