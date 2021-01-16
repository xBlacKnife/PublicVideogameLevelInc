import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goHome() {
    this.router.navigate(['/home']);
  }

  doLogin() {
    this.router.navigate(['/home']);
    //TO-DO: Log in (call updateState from HeaderComponent)
  }

  doSignUp() {
    this.router.navigate(['/home']);
    //TO-DO: Sign user up
  }

}
