import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngresarproductoPageRoutingModule } from './ingresarproducto-routing.module';

import { IngresarproductoPage } from './ingresarproducto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngresarproductoPageRoutingModule
  ],
  declarations: [IngresarproductoPage]
})
export class IngresarproductoPageModule {}
