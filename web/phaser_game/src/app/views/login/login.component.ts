import { Component, OnInit } from '@angular/core';
import { Usuario } from '../entidades/Usuario';
import { LoginService } from '../services/login.service';
import { Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usuario: Usuario;
  public user: string;
  public psw: string;
  public value2: string;

  constructor(
    private loginService: LoginService,
    private router: Router,
  ) { 
    this.user = "";
    this.psw = "";
  }

 

  ngOnInit(): void {

  }


  inicioSesion(): void {
    
      this.loginService.iniciarSesion(this.usuario).subscribe(
        response => {
          console.log("inició sesión")
          this.router.navigate(['home']);
        }, 
        error => {
          console.log("error al iniciar sesión")
        });
    }

}


