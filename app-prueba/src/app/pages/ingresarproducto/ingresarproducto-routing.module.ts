import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IngresarproductoPage } from './ingresarproducto.page';

const routes: Routes = [
  {
    path: '',
    component: IngresarproductoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngresarproductoPageRoutingModule {}
