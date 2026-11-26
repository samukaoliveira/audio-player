import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss']
})
export class AudioPlayerComponent implements OnInit {

  constructor() { }

  anguloAtual: number = 0;
  intervaloGiro: any = null;

  ngOnInit(): void {
  }

  girarFone(){
    clearInterval(this.intervaloGiro);

    this.intervaloGiro = setInterval(() => {
      this.anguloAtual+=1;
    }, 30)

  }

}
