import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';
import { City } from 'src/app/Modules/shared/Interfaces/city.interface';
import { CitiesDataProviderService } from '../../services/cities-data-provider.service';

@Component(
{
	selector: 'app-cities',
	templateUrl: './cities.component.html',
	styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {

	public citiesArrayObservable$: Observable<City[]>;

	public inputText: string = '';
	public citySuggestion: City | undefined;
	
	public cityName: FormControl = new FormControl( '' );

	constructor( private service: CitiesDataProviderService ) { }

	ngOnInit(): void 
	{
		this.citiesArrayObservable$ = this.service.getCitiesObs();

		this.cityName.valueChanges
			.pipe(filter( value => value.length > 2 ), debounceTime(500), distinctUntilChanged())
			.subscribe(value => 
			{
				console.log('debounced form value: ', value);
				this.citySuggestion = this.service.findCity( value );	
			})
		}

}
