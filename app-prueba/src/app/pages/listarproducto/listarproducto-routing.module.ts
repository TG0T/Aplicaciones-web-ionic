import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarproductoPage } from './listarproducto.page';

const routes: Routes = [
  {
    path: '',
    component: ListarproductoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarproductoPageRoutingModule {}
