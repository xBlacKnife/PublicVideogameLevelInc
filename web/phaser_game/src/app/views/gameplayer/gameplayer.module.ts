import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamePlayerRoutingModule } from './gameplayer-routing.module';
import { GameModule } from '../../game/game.module';
import { GamePlayerComponent } from './gameplayer.component';

@NgModule({
  imports: [
    CommonModule,
    GameModule,
    GamePlayerRoutingModule
  ],
  declarations: [
    GamePlayerComponent
  ]
})
export class GamePlayerModule { }
