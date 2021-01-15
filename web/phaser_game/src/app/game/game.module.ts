import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameComponent } from './game.component';

@NgModule({
  exports: [
    GameComponent
  ],
  declarations: [
    GameComponent
  ]
})
export class GameModule { }
