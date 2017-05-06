import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';
import { PlayerService } from '../player.service';
import { Cancion } from '../cancion';

@Component({
  selector: 'app-buscar-canciones',
  templateUrl: './buscar-canciones.component.html',
  styleUrls: ['./buscar-canciones.component.css']
})
export class BuscarCancionesComponent implements OnInit {
  canciones:Cancion[]
  constructor(private spotifySvc:SpotifyService,
    private player:PlayerService) { }

  ngOnInit() {
  }

  buscar(cancionInput) {
    this.canciones = [];
    this.spotifySvc.buscar(cancionInput.value)
      .subscribe((response) => {
        cancionInput.value = "";
        this.canciones = response.tracks.items.map(i => {
          let c = new Cancion();
          c.nombre = i.name
          c.autor = (i.artists[0] || {}).name;
          c.imagen = (i.album.images[0] || {}).url;
          c.url = i.preview_url;
          return c;
        });
      })
  }

  play(c:Cancion) {
    this.player.play(c.url);
  }

  pause(c:Cancion) {
    this.player.pause();
  }

}
