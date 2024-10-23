import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'index',
    loadChildren: () => import('./pages/index/index.module').then( m => m.IndexPageModule)
  },
  {
    path: 'contenido',
    loadChildren: () => import('./pages/contenido/contenido.module').then( m => m.ContenidoPageModule)
  },
  {
    path: 'contrasena',
    loadChildren: () => import('./pages/contrasena/contrasena.module').then( m => m.ContrasenaPageModule)
  },
  {
    path: 'crearusuario',
    loadChildren: () => import('./pages/crearusuario/crearusuario.module').then( m => m.CrearusuarioPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'ingresarproducto',
    loadChildren: () => import('./pages/ingresarproducto/ingresarproducto.module').then( m => m.IngresarproductoPageModule)
  },  {
    path: 'listarproducto',
    loadChildren: () => import('./pages/listarproducto/listarproducto.module').then( m => m.ListarproductoPageModule)
  },
  {
    path: 'listarproductoxcorreo',
    loadChildren: () => import('./pages/listarproductoxcorreo/listarproductoxcorreo.module').then( m => m.ListarproductoxcorreoPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
