import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
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


	public inputText: string = '';
	public citySuggestion: City | undefined;
	// private count: number = 0;
	

	constructor() { }

	ngOnInit(): void 
	{
	}


	public cityName: FormControl = new FormControl( '' );


	public onInput(): void
	{

		this.citySuggestion = this.findCity( this.cityName.value );

	}

	private findCity( input: string ): City | undefined
	{
		let foundCity: City | undefined;
		if (input.length > 0)
		{
			foundCity = this.citiesArray.find(record => input == record.city.slice(0, input.length) );
		}
		else
		{
			foundCity = undefined;
		}

		console.log(`${input}, ${foundCity?.city}`);

		return foundCity;
	}

	// private 
}
