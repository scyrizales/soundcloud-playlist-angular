import { Component, OnInit, OnDestroy } from '@angular/core';
import { PlaylistService } from '../playlist.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Playlist } from '../playlist';
import { SessionService } from '../session.service';

@Component({
  selector: 'editar-playlist',
  templateUrl: './editar-playlist.component.html',
  styleUrls: ['./editar-playlist.component.css']
})
export class EditarPlaylistComponent implements OnInit, OnDestroy {
  nuevaPlaylist: Playlist = new Playlist();
  sub: any;
  constructor(private playlistService: PlaylistService, 
              private router: Router, 
              private route: ActivatedRoute,
              private sessionSvc: SessionService) { }

  ngOnInit() {
    if (!this.sessionSvc.estaLogeado) {
      this.router.navigate(['/login']);
    }
    this.sub = this.route.params.subscribe(params => {
      if (params['id'] !== 'new') {
        this.playlistService.listar(params['id'])
          .subscribe(e => {
            this.nuevaPlaylist = e;
          });
      }
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  guardar() {
    this.playlistService.guardar(this.nuevaPlaylist)
      .subscribe(e => {
        this.router.navigate(['/editar-playlist', e.id]);
      })
  }

}
