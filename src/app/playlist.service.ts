import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';
import { Playlist } from './playlist';

@Injectable()
export class PlaylistService {

  constructor(private http: Http) { }

  listar(id: string = null) {
    return this.http.get('/api/playlist' + (id ? `/${id}` : ''))
      .map(res => res.json())
      .map(ent => {
        if (id) {
          return new Playlist(ent);
        } else {
          return ent.map(e => new Playlist(e))
        }
      });
  }

  guardar(playlist: Playlist) {
    if (playlist.id) {
      return this.http.put(`api/playlist/${playlist.id}`, playlist)
        .map(res => res.json())
        .map(e => new Playlist(e));
    } else {
      return this.http.post('/api/playlist', playlist)
        .map(res => res.json())
        .map(e => new Playlist(e));
    }
  }

}