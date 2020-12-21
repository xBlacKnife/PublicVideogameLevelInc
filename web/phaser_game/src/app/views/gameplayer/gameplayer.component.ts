import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gameplayer',
  templateUrl: './gameplayer.component.html',
  styleUrls: ['./gameplayer.component.css']
})
export class GamePlayerComponent implements OnInit {

  public faved: Boolean;

  constructor() { }

  ngOnInit(): void {
    // Inicialización.
    this.faved = false;
  }

  addToFav(): void {
    this.faved = true; // test
  }

  removeFromFav(): void {
    this.faved = false; // test
  }

}
