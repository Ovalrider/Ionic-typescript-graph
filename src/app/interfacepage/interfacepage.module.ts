import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InterfacepagePageRoutingModule } from './interfacepage-routing.module';

import { InterfacepagePage } from './interfacepage.page';
import { HeaderModule } from '../header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InterfacepagePageRoutingModule,
    HeaderModule
  ],
  declarations: [InterfacepagePage]
})
export class InterfacepagePageModule {}
