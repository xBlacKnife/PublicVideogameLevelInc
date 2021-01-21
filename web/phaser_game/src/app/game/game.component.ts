import { Component, OnInit } from '@angular/core';
import Phaser from 'phaser';

import {MenuScene} from "./scenes/MenuScene"
import {PlayScene} from "./scenes/PlayScene"
import {EditorScene} from "./scenes/EditorScene"
import {LoadScene} from "./scenes/LoadScene"

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  phaserGame: Phaser.Game;
  config: Phaser.Types.Core.GameConfig;  constructor() {
    this.config = {
      width: 1080,
      height: 720,
      parent: "game-canvas",
      type: Phaser.AUTO,
      scale:{
          mode: Phaser.Scale.FIT,
          autoCenter: Phaser.Scale.CENTER_BOTH
      },
      scene: [
        LoadScene, MenuScene, PlayScene, EditorScene
      ],
      physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
      },
      backgroundColor: "#000000"
    };
  }  
  ngOnInit() {
    this.phaserGame = new Phaser.Game(this.config);      
  }
}