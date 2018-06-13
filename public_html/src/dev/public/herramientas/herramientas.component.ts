import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

import { list, items } from '../../services/list.animation';


@Component({
	templateUrl: './herramientas.component.html',
	animations:[list(),items()]
	
})
export class HerramientasComponent implements OnInit {

	guides:any;

	constructor(
		@Inject(DOCUMENT) private document: any
		) { }

	ngOnInit() {

		//arrays
		this.guides = [
			{
				img: '/layout/solicitud-dis.svg',
				title: 'Solicitudes disciplinarias',
				link:'hola'
			},
			{
				img: '/layout/mr-chispa.svg',
				title: 'Mr. Chispa',
				link:'hola'
			},
			{
				img: '/layout/kactus.svg',
				title: 'Kactus',
				link:'hola'
			},
			{
				img: '/layout/feedback.svg',
				title: 'BRM Feedback',
				link:'hola'
			}

		]
	}


}
