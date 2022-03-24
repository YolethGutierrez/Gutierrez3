import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'presentacionpersonal',
    loadChildren: () => import('./pages/presentacionpersonal/presentacionpersonal.module').then( m => m.PresentacionpersonalPageModule)
  },
  {
    path: 'lugardeorigen',
    loadChildren: () => import('./pages/lugardeorigen/lugardeorigen.module').then( m => m.LugardeorigenPageModule)
  },
  {
    path: 'mismetaspersonales',
    loadChildren: () => import('./pages/mismetaspersonales/mismetaspersonales.module').then( m => m.MismetaspersonalesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
