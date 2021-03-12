import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitiesComponent } from './components/cities/cities.component';
import { FormatCityPipe } from './pipes/format-city.pipe';



@NgModule(
{
	declarations: 
	[
		CitiesComponent,
		FormatCityPipe
	],
	imports: 
	[
		CommonModule
	]
})

export class MiscModule { }
