import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarproductoPageRoutingModule } from './listarproducto-routing.module';

import { ListarproductoPage } from './listarproducto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarproductoPageRoutingModule
  ],
  declarations: [ListarproductoPage]
})
export class ListarproductoPageModule {}
