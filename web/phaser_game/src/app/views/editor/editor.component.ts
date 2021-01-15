import { Component, OnInit } from '@angular/core';

interface Level {
  name: string,
  code: string
}

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})

export class EditorComponent implements OnInit {

  public levels: Level[];
  public selectedLevels: Level[];
  public saved: Boolean;

  constructor() {
    this.levels = [
      {name: 'Level 1', code: 'A'},
      {name: 'Level 2', code: 'B'},
      {name: 'Level 3', code: 'C'}
    ];
   }

  ngOnInit(): void {
    // Inicialización.
    this.saved = false;
  }

  save(): void {
    this.saved = true; // test
  }

  update(): void {
    //TO-DO
  }
  
}
