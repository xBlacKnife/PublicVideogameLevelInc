import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GamePlayerComponent } from './gameplayer.component';

const routes: Routes = [
  { path: '', component: GamePlayerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamePlayerRoutingModule { }
