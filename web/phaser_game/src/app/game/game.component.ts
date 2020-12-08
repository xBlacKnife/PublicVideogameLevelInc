import { Component, OnInit } from '@angular/core';
import Phaser from 'phaser';

import MenuScene from "./scenes/MenuScene"
import PlayScene from "./scenes/PlayScene"
import EditorScene from "./scenes/EditorScene"
import MainScene from "./scenes/MainScene"

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
    parent: "container",
    type: Phaser.AUTO,
    scale:{
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: [
          MainScene
    ],
    physics: {
        default: "arcade",
        arcade:{
            gravity: {
                y: 400
            },
            debug: false
        }
    },
    backgroundColor: "#bbbbff"
    };
  }  ngOnInit() {
    this.phaserGame = new Phaser.Game(this.config);
  }
}