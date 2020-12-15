import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamePlayerRoutingModule } from './gameplayer-routing.module';
import { GameComponent } from '../../game/game.component';
import { GamePlayerComponent } from './gameplayer.component';

@NgModule({
  imports: [
    CommonModule,
    GamePlayerRoutingModule
  ],
  declarations: [GamePlayerComponent, GameComponent]
})
export class GamePlayerModule { }
