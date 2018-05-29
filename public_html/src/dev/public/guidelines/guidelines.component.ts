import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

import { list, items } from '../../services/list.animation';


@Component({
	templateUrl: './guidelines.component.html',
	animations:[list(),items()]
	
})
export class GuideComponent implements OnInit {

	guides:any;

	constructor(
		@Inject(DOCUMENT) private document: any
		) { }

	ngOnInit() {

		//arrays
		this.guides = [
			{
				title: 'Tenía en su casa una ama que pasaba de los cuarenta',
				img: 'img.jpg',
				desc: 'En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga antigua, rocín flaco y galgo corredor.',
				link:'hola'
			},
			{
				title: 'Tenía en su casa una ama que pasaba de los cuarenta',
				img: 'img.jpg',
				desc: 'En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga antigua, rocín flaco y galgo corredor.',
				link:'hola'
			},
			{
				title: 'Tenía en su casa una ama que pasaba de los cuarenta',
				img: 'img.jpg',
				desc: 'En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga antigua, rocín flaco y galgo corredor.',
				link:'hola'
			},
			{
				title: 'Tenía en su casa una ama que pasaba de los cuarenta',
				img: 'img.jpg',
				desc: 'En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga antigua, rocín flaco y galgo corredor.',
				link:'hola'
			}

		]

	}


}
