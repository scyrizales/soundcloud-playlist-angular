import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Usuario } from './usuario';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SessionService {
  private _usuario: BehaviorSubject<Usuario> = new BehaviorSubject(new Usuario());
  public usuario: Observable<Usuario> = this._usuario.asObservable();
  public estaLogeado: boolean = false;
  
  constructor(private http: Http) { 
    this.init();
  }

  init() {
    this.http.get('/api/session/usuario')
      .subscribe(res => {
        let u = new Usuario(res.json());
        this.estaLogeado = !!u.id;
        this._usuario.next(u);
      });
  }

  registro(usuario: Usuario) {
    return this.http.post('/api/session/registrar', usuario)
      .map(res => res.json());
  }

  login(usuario: any) {
    return this.http.post('/api/session/login', usuario)
      .map(res => res.json())
      .map(usuario => {
        let u = new Usuario(usuario);
        this.estaLogeado = !!u.id;
        this._usuario.next(u);
      });
  }

  fbLogin(usuario: any) {
    return this.http.post('/api/session/fblogin', usuario)
      .map(res => res.json())
      .map(usuario => {
        let u = new Usuario(usuario);
        this.estaLogeado = !!u.id;
        this._usuario.next(u);
      });
  }

  logout() {
    return this.http.post('/api/session/logout', {})
      .map(res => res.json())
      .map(res => {
        if (res.msg === 'ok') {
          this.estaLogeado = false;
          this._usuario.next(new Usuario());
        }
      });
  }

}
