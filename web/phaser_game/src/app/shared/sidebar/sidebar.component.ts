import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public user_is_admin: boolean;

  constructor(private router: Router) { 

    // Inicialización.
    this.user_is_admin = false;
  }

  ngOnInit(): void { }

  updateState() { // Invocar cuando se reciba login y se consigure la sesión de usuario. TODO
    this.user_is_admin = sessionStorage.getItem('admin') == 'yes';
  }

  goHome() { this.router.navigate(['/home']); }

  goEditor() { this.router.navigate(['/editor']); }

  goRanking() { this.router.navigate(['/ranking']); }

  goAdmin() { this.router.navigate(['/admin']); }

  goGame() { this.router.navigate(['/game']); }

}
