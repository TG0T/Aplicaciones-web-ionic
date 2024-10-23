import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarproductoxcorreoPageRoutingModule } from './listarproductoxcorreo-routing.module';

import { ListarproductoxcorreoPage } from './listarproductoxcorreo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarproductoxcorreoPageRoutingModule
  ],
  declarations: [ListarproductoxcorreoPage]
})
export class ListarproductoxcorreoPageModule {}
