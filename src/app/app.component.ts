import { Component } from '@angular/core';

import { freeApiService } from './services/freeapi.service'; // servizio che mi servirà per la chiamata ajax
import { HeaderComponentComponent } from './header-component/header-component.component';
import { BodyComponentComponent } from './body-component/body-component.component';

// importo i due files
import { Filmname } from './classes/filmname';
import { Serie } from './classes/serie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app';
  // il valore che mi arriva dall'header component
  lstfilms: Filmname[];
  lstserie: Serie[];
  valueFromChild: any;

  constructor(private _freeApiService: freeApiService){
  }

  getOutputVal(inputval){
    if(inputval){
      this.valueFromChild = inputval;
      console.log(this.valueFromChild);
      // passo alla funzione getfilmsbytitle il valore che mi arriva dopo aver cliccato 'Cerca'
      this._freeApiService.getfilmsbytitle(this.valueFromChild)
      // subscribe è un metodo che arriva dalla libreria rxjs e invierà i risultati della ricerca
      .subscribe(
        data => {
          // assegno tutti i risultati a lstfilms
          console.log(this.lstfilms = data.results);
        }
      )

      this._freeApiService.getseriebytitle(this.valueFromChild)
      // subscribe è un metodo che arriva dalla libreria rxjs e invierà i risultati della ricerca
      .subscribe(
        data => {
          // assegno tutti i risultati a lstserie
          console.log(this.lstserie = data.results);
        }
      )
    }
  }

  ngOnInit(){
  }
}
