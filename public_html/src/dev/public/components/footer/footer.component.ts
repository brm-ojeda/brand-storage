import { Component, OnInit, Inject, Input, Output } from '@angular/core';
@Component({
  selector: 'footer-app',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {

	@Input() classes:string;

	constructor() { }

	ngOnInit() {
	}


}
