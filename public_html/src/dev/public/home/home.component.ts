import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

	logged:boolean = false;
  constructor(
  	@Inject(DOCUMENT) private document: any
  	) { }

  ngOnInit() {
    this.document.body.classList.add('login');

    if(this.logged){
      this.document.body.classList.add('home');

   }

  }

  logIn(){
    this.logged = !this.logged;
    this.document.body.classList.remove('login');
    this.document.body.classList.add('body-home');
  }

  //esto se ejecuta cuando cambia el componente.
  //Ex. cuando el usuario pasa de / a /logos
  ngOnDestroy(){
    this.document.body.classList.remove('body-home');
  }

}
