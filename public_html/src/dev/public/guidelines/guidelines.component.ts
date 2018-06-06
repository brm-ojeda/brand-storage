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
				img: '/layout/manual-i-c.svg',
				title: 'Manual de imágen corporativa BRM',
				desc: 'Con este manual aprenderá sobre las bases de la marca, fuentes, colores y la forma correcta de usarlos.',
				link:'hola'
			},
			{
				img: '/layout/manual-i-v.svg',
				title: 'Manual de imágen y video BRM',
				desc: 'Este es el manual que debería usar para el uso de fotografías y videos con la marca.',
				link:'hola'
			},
			{
				img: '/layout/manual-i-coob.svg',
				title: 'Manual de imágen coobranding',
				desc: 'Aquí encontrará una guía de como utilizar la marca de la mano de otras marcas y aliados.',
				link:'hola'
			},

		]

	}


}
