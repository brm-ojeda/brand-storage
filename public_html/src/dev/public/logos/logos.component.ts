import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

import { list, items } from '../../services/list.animation';


@Component({
	templateUrl: './logos.component.html',
	animations:[list(),items()]
	
})
export class LogosComponent implements OnInit {

	logos:any;


	constructor(
		@Inject(DOCUMENT) private document: any
		) { }

	ngOnInit() {

		//arrays
		this.logos = [
			{
				title: 'Logo azul BRM .AI',
				img: '/layout/logo-BRM-azul.svg',
				link:'hola'
			},
			{
				title: 'Logo azul BRM .PNG',
				img: '/layout/logo-BRM-azul.svg',
				link:'hola'
			},
			{
				title: 'Logo azul BRM .GIF',
				img: '/layout/logo-BRM-azul.svg',
				link:'hola'
			},
			{
				title: 'Logo blanco BRM .AI',
				img: '/layout/logo-BRM-azul.svg',
				link:'hola'
			},
			{
				title: 'Logo blanco BRM .PNG',
				img: '/layout/logo-BRM-azul.svg',
				link:'hola'
			},
			{
				title: 'Logo blanco BRM .GIF',
				img: '/layout/logo-BRM-azul.svg',
				link:'hola'
			},

		]

	}


}
