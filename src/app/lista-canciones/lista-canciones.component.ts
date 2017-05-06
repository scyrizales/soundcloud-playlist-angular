import { Component, OnInit, Input } from '@angular/core';
import { Cancion } from '../cancion';
import { Playlist } from '../playlist';
import { PlayerService } from '../player.service';
import { CancionService } from '../cancion.service';

@Component({
  selector: 'lista-canciones',
  templateUrl: './lista-canciones.component.html',
  styleUrls: ['./lista-canciones.component.css']
})
export class ListaCancionesComponent implements OnInit {
  @Input() playlist:Playlist;
  canciones: Cancion[] = [];
  constructor(private cancionService: CancionService,
    private player:PlayerService) { }

  ngOnInit() {
    this.cancionService.listar(this.playlist.id)
      .subscribe(canciones => {
        this.canciones = canciones;
      });
  }

  play(c:Cancion) {
    this.player.play(c.url);
  }

  pause(c:Cancion) {
    this.player.pause();
  }

  playAll() {
    this.player.playAll(this.canciones.map(c => c.url));
  }

}