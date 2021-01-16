import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './views/login/login.component';

const routes: Routes = [
  {   
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    loadChildren: () => import('./views/home/home.module').then(mod => mod.HomeModule) 
  },
  {
    path: 'game',
    loadChildren: () => import('./views/gameplayer/gameplayer.module').then(mod => mod.GamePlayerModule) 
  },
  {
    path: 'editor',
    loadChildren: () => import('./views/editor/editor.module').then(mod => mod.EditorModule) 
  },
  {
    path: '**', redirectTo: 'home'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
