import { Component, OnInit, EventEmitter, Output } from '@angular/core';   // EventEmitter e Output mi servirà per inviare il dato dal child al parent (App Component)

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponentComponent implements OnInit {
  // evento che mi permetterà di inviare all'AppComponent
  @Output() goToParent = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }
  status: boolean = false;
  openMenu(){
    this.status = true;
  }

  closeMenu(){
    this.status = false;
  }

  controlStatus(){
    if(this.status == true){
      return 'active';
    } else {
      return 'noactive';
    }
  }
  // funzione che mi servirà a mandare all'AppComponent il valore che l'utente scrive e dopo che clicca su 'Cerca'
  sendValueToParent(inputval){
    console.log(inputval);
    // mando il valore che mi arriva dopo che clicca 'Cerca'
    this.goToParent.emit(inputval);
  }

  // per pulire la casella di input text
  clearInput(inputval){
    inputval.value = null;
  }

}
