import { Injectable } from '@angular/core';

@Injectable()
export class PlayerService {
  audio: any;
  constructor() { 
    this.audio = new Audio();
  }
  play(url) {
    if (this.audio.src !== url) {
      this.audio.src = url;
    }
    this.audio.play();
  }
  pause() {
    this.audio.pause();
  }
}
