import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { City } from 'src/app/Modules/shared/Interfaces/city.interface';
import { CitiesDataProviderService } from '../../services/cities-data-provider.service';

@Component(
{
	selector: 'app-cities',
	templateUrl: './cities.component.html',
	styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {

	// public citiesArray: City[];
	public citiesArrayObservable$: Observable<City[]>;


	public inputText: string = '';
	public citySuggestion: City | undefined;
	
	public cityName: FormControl = new FormControl( '' );

	constructor( private service: CitiesDataProviderService ) 
	{
		// this.citiesArray = this.service.getCities();
	}

	ngOnInit(): void 
	{
		this.citiesArrayObservable$ = this.service.getCitiesObs();

		this.cityName.valueChanges
			.pipe(debounceTime(500))
			.pipe(distinctUntilChanged())
			.subscribe(value => 
			{
				console.log('debounced form value: ', value);
				this.citySuggestion = this.service.findCity( value );	
			})
	}


	public onInput(): void
	{
		/* console.log('input field:', this.cityName);
		// this.citySuggestion = this.service.findCity( this.cityName.value );
		this
		.service
		.findCityObs( this.cityName.value )
		.pipe(debounceTime(5000) )
		.subscribe((value: City | undefined) => 
			{
				console.log('Observable value is:', value);
				this.citySuggestion = value;
			}); */
	}

}
