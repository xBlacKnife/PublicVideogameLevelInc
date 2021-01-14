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
  private user: string;
  private psw: string;
  private value2: string;

  constructor(
    private loginService: LoginService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }


  inicioSesion(): void {


    
      this.loginService.iniciarSesion(this.usuario).subscribe(
        response => {

          //Swal.fire({ position: 'center', type: 'success', text: 'El producto fue creado correctamente.', showConfirmButton: false, timer: 2000 });
          this.router.navigate(['home']);
        }, 
        error => {
          //Swal.fire({ title: '¡ERROR Usuario o contraseña incorrecta!', text: error.error, type: 'error', confirmButtonText: 'Continuar', confirmButtonColor: '#007ad9' });  
        });
    }

}


