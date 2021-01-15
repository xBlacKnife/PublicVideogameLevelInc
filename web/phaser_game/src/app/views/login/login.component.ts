import { Component, OnInit } from '@angular/core';
import { Usuario } from '../entidades/Usuario';
import { LoginService } from '../services/login.service';
import Swal from 'sweetalert2';
import { Router} from '@angular/router';

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

          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Correcto',
            showConfirmButton: false,
            timer: 1500
          })
          this.router.navigate(['home']);
        }, 
        error => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Algo anda mal!',
            footer: 'Usuario o contraseña incorrectos'
          })
        });
    }

}


