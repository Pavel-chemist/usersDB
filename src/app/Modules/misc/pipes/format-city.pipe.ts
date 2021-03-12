import { Pipe, PipeTransform } from '@angular/core';
import { City } from '../../shared/Interfaces/city.interface';

@Pipe({
 	name: 'formatCity'
})
export class FormatCityPipe implements PipeTransform {

	transform( value: City ): string 
	{
		let formattedCityName: string = `${value.city}, ${value.country} - ${value.region}`;

		return formattedCityName;
	}

}
