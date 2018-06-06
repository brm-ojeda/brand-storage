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
  }

  logIn(){
    this.logged = !this.logged;
    this.document.body.classList.remove('login');
  }

}
