import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';
import { Cancion } from './cancion';

@Injectable()
export class CancionService {

  constructor(private http: Http) { }

  listar(playlistId: string) {
    return this.http.get('/api/cancion', {
      params: {
        playlist: playlistId
      }
    }).map(res => res.json())
      .map(ent => {
        return ent.map(e => new Cancion(e))
      });
  }

  guardar(cancion: Cancion) {
    if (cancion.id) {
      return this.http.put(`api/cancion/${cancion.id}`, cancion)
        .map(res => res.json())
        .map(e => new Cancion(e));
    } else {
      return this.http.post('/api/cancion', cancion)
        .map(res => res.json())
        .map(e => new Cancion(e));
    }
  }

}