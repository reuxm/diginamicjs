import { Component, OnInit } from '@angular/core';

import { DexModel, Pokemon } from '../dex.model';

import data from '../pokemon.data';

@Component({
  selector: 'dex',
  templateUrl: './dex.component.html',
  styleUrls: ['./dex.component.css']
})
export class DexComponent implements OnInit {

	dex = new DexModel();
	
	constructor() {
		data.forEach(
			entry => this.dex.add( entry )
		);
	}

	ngOnInit() { }

}
