import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-body-component',
  templateUrl: './body-component.component.html',
  styleUrls: ['./body-component.component.css']
})
export class BodyComponentComponent implements OnInit {
  @Input() films: [{id: number, poster_path: string, title: string, original_title: string, original_language: string, vote_average: number}];
  @Input() serie: [{id: number, poster_path: string, name: string, original_name: string, original_language: string, vote_average: number}];
  voto_arrotondato: number;

  constructor() { }

  ngOnInit() {
  }


  // per controllare l'immagine di copertina
  controlImage(immagine){
    // se l'immagine esiste
    if(immagine != null){
      return 'https://image.tmdb.org/t/p/w342/'+immagine;
    } else {
      // se non esiste
      return 'assets/images/nofilm.jpg';
    };
  }

  calcVote(voto){
    return this.voto_arrotondato = Math.ceil(voto/2);
  }


}
