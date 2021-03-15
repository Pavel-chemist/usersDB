import { Pipe, PipeTransform } from '@angular/core';
import { City } from '../../shared/Interfaces/city.interface';

@Pipe({
 	name: 'formatCity'
})
export class FormatCityPipe implements PipeTransform {

	transform( value: City | undefined ): string 
	{
		let formattedCityName: string;
		if ( value == undefined )
		{
			formattedCityName = '';
		}
		else
		{
			formattedCityName = `${value.city}, ${value.country} - ${value.region}`;
		}

		console.log(value);

		return formattedCityName;
	}

}
