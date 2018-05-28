import { Component, OnInit, Inject,Injectable, ViewChild, ElementRef } from '@angular/core';
import { Router} from '@angular/router';
import { DOCUMENT } from '@angular/platform-browser';
import {WINDOW } from "../../../services/window.service";
import { LoginService } from '../../../services/login.service';


@Component({
  selector: 'header-app',
  templateUrl: './header.component.html',
})

export class HeaderComponent implements OnInit {

  menuState:boolean = false;
  offset:number = 0;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window: Window,
    public router: Router,
    public loginService: LoginService,
  	) {  }
  
  ngOnInit() {

    // this.document.body.classList.remove('login');

  // console.log(this.picker)
    
  }

  toggleMenu(){
    
    let ancho = this.window.screen.width;

    this.offset = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
    this.menuState = !this.menuState;

    if (ancho < 768){
      this.document.body.classList.toggle('body-fixed');
     }
   }

}
