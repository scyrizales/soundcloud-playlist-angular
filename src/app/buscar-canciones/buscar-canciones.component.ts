import { Component, OnInit, Input } from '@angular/core';
import { SpotifyService } from '../spotify.service';
import { PlayerService } from '../player.service';
import { CancionService } from '../cancion.service'
import { Cancion } from '../cancion';
import { Playlist } from '../playlist';

@Component({
  selector: 'buscar-canciones',
  templateUrl: './buscar-canciones.component.html',
  styleUrls: ['./buscar-canciones.component.css']
})
export class BuscarCancionesComponent implements OnInit {
  @Input() playlist:Playlist;
  canciones:Cancion[];
  nuevasCanciones: Cancion[];
  constructor(private spotifySvc:SpotifyService,
    private player:PlayerService,
    private cancionSvc:CancionService) { }

  ngOnInit() {
    this.cancionSvc.listar(this.playlist.id)
      .subscribe(canciones => {
        this.canciones = canciones;
      });
  }

  buscar(cancionInput) {
    this.nuevasCanciones = [];
    this.spotifySvc.buscar(cancionInput.value)
      .subscribe((response) => {
        cancionInput.value = "";
        this.nuevasCanciones = response.tracks.items.map(i => {
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

  agregar(c: Cancion) {
    c.playlist = this.playlist.id;
    this.cancionSvc.guardar(c).subscribe((nc) => {
      this.canciones.push(nc);
    });
  }

}
