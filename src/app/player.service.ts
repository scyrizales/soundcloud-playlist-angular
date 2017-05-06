import { Injectable } from '@angular/core';

@Injectable()
export class PlayerService {
  audio: any;
  urls: string[];
  actualIx:number = 0;
  constructor() { 
    this.audio = new Audio();
    this.audio.addEventListener('ended', () => {
      if (this.urls.length) {
        this.play(this.urls.shift());
      }
    });
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
  playAll(urls:string[]) {
    this.urls = urls;
    this.play(this.urls.shift());
  }
}
