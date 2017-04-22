import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Usuario } from './usuario';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SessionService {
  private _usuario: BehaviorSubject<Usuario> = new BehaviorSubject(new Usuario());
  public usuario: Observable<Usuario> = this._usuario.asObservable();
  constructor() { }

  login() {

  }

  registro() {

  }

  logout() {
    
  }

}
