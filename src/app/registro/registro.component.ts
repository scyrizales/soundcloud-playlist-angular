import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from './../session.service';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  nuevoUsuario: Usuario = new Usuario();
  errors: String[] = [];

  constructor(private sessionSvc:SessionService,
    private router:Router) { }

  ngOnInit() {
  }

  registrar(cemail, cpassword) {
    this.errors = [];
    if (!this.nuevoUsuario.nombre) {
      this.errors.push('Ingrese Usuario');
    }
    if (!this.nuevoUsuario.email) {
      this.errors.push('Ingrese Email');
    }
    if (this.nuevoUsuario.email !== cemail) {
      this.errors.push('Emails no concuerdan');
    }
    if (!this.nuevoUsuario.password) {
      this.errors.push('Ingrese Password');
    }
    if (this.nuevoUsuario.password !== cpassword) {
      this.errors.push('Passwords no concuerdan');
    }
    if (this.errors.length === 0) {
      this.sessionSvc.registro(this.nuevoUsuario)
        .subscribe(usuario => {
          this.router.navigate(['/login']);
        });
    }
  }

  fbRegistrar(cpassword) {
    this.errors = [];
    if (!this.nuevoUsuario.password) {
      this.errors.push('Ingrese Password');
    }
    if (this.nuevoUsuario.password !== cpassword) {
      this.errors.push('Passwords no concuerdan');
    }
    if (this.errors.length === 0) {
      window["FB"].login((response) => {
        if (response.authResponse) {
          window["FB"].api('/me', {fields: 'name,email'}, (response) => {
            let u = new Usuario(response);
            u.nombre = response.name;
            u.password = this.nuevoUsuario.password;
            u.foto = "https://graph.facebook.com/v2.8/" + response.id + "/picture"
            this.sessionSvc.registro(u).subscribe(usuario => {
              this.router.navigate(['/login']);
            });
            console.log('Good to see you, ' + response.name + '.');
          });
        } else {
          this.errors.push('El usuario no acepto el login.');
        }
      }, {scope: 'email'});
    }
  }

}
