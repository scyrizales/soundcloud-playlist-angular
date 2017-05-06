import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class SpotifyService {

  constructor(private http:Http) { }
  buscar(cancion:string) {
    return this.http.get('https://api.spotify.com/v1/search', { 
      params: {
        q: cancion,
        type: 'track'
      }
     })
     .map(res => res.json());
  }
}
