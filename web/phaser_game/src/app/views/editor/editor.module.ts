import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditorRoutingModule } from './editor-routing.module';
import { EditorComponent } from './editor.component';
import { GameModule } from '../../game/game.module';
import { PrimeNGModule } from 'src/app/primeng.module';

@NgModule({
  imports: [
    CommonModule,
    EditorRoutingModule,
    GameModule,
    PrimeNGModule
  ],
  declarations: [
    EditorComponent
  ]
})

export class EditorModule { }
