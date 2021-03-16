import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { City } from '../../shared/Interfaces/city.interface';

@Injectable()
export class CitiesDataProviderService {

	private citiesArray: City[] =
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
		},
		{
			city: 'Cologne',
			country: 'Germany',
			region: 'North Rhine-Westphalia'
		},
		{
			city: 'Temuco',
			country: 'Chile',
			region: 'Araucanía'
		}		
	]
	
	constructor() { }


	public getCities(): City[]
	{
		return this.citiesArray;
	}

	public getCitiesObs(): Observable<City[]>
	{
		return of(this.citiesArray);
	}

	public findCity( input: string ): City | undefined
	{
		let foundCity: City | undefined;
		if (input.length > 0)
		{
			foundCity = this.citiesArray.find(record => input.toLowerCase() == record.city.toLowerCase().slice(0, input.length) );
		}
		else
		{
			foundCity = undefined;
		}

		console.log(`${input}, ${foundCity?.city}`);

		return foundCity;
	}

	public findCityObs( input: string ): Observable<City | undefined>
	{
		let foundCity: City | undefined;
		if (input.length > 0)
		{
			foundCity = this.citiesArray.find(record => input.toLowerCase() == record.city.toLowerCase().slice(0, input.length) );
		}
		else
		{
			foundCity = undefined;
		}

		console.log(`${input}, ${foundCity?.city}`);

		return of(foundCity);
	}


}
