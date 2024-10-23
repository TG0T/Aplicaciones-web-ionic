import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarproductoxcorreoPage } from './listarproductoxcorreo.page';

const routes: Routes = [
  {
    path: '',
    component: ListarproductoxcorreoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarproductoxcorreoPageRoutingModule {}
