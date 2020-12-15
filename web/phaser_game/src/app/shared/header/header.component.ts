import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public logged_in: Boolean;
  public username: string;

  constructor(private router: Router) { }

  ngOnInit(): void {

    // Inicialización.
    this.logged_in = false;
    this.username = null;
  }

  updateState() {
    this.username = sessionStorage.getItem('username');
    this.logged_in = this.username == null;
  }

  goLogin() {
    this.router.navigate(['/login']);
    this.logged_in = true; // test
  }

  doLogout() {
    this.router.navigate(['/home']);
    this.logged_in = false; // test
  }
}
