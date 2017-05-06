import { Component, OnInit } from '@angular/core';
import { Playlist } from '../playlist';
import { PlaylistService } from '../playlist.service';

@Component({
  selector: 'playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.css']
})
export class PlaylistsComponent implements OnInit {
  playlists: Playlist[] = [];
  constructor(private playlistService: PlaylistService) { }

  ngOnInit() {
    this.playlistService.listar()
      .subscribe(playlists => {
        this.playlists = playlists;
      });
  }

}
