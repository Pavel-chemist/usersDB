import { Component, OnInit } from '@angular/core';
import { City } from 'src/app/Modules/shared/Interfaces/city.interface';

@Component(
{
	selector: 'app-cities',
	templateUrl: './cities.component.html',
	styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {

	public citiesArray: City[] =
	[
		{
			city: 'Minsk',
			country: 'Belarus',
			region: 'Minskaya voblast\''
		},
		{
			city: 'Washington',
			country: 'USA',
			region: 'District of Columbia'
		},
		{
			city: 'Sapporo',
			country: 'Japan',
			region: 'Hokkaido prefecture'
		}
	]


	constructor() { }

	ngOnInit(): void 
	{
	}

}
