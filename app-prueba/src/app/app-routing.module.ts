import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'index',
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
  },  {
    path: 'crearusuario',
    loadChildren: () => import('./pages/crearusuario/crearusuario.module').then( m => m.CrearusuarioPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
