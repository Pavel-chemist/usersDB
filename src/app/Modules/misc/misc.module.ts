import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitiesComponent } from './components/cities/cities.component';
import { FormatCityPipe } from './pipes/format-city.pipe';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { CitiesDataProviderService } from './services/cities-data-provider.service';



@NgModule(
{
	declarations: 
	[
		CitiesComponent,
		FormatCityPipe
	],
	imports: 
	[
		CommonModule,
		MatInputModule,
		ReactiveFormsModule
	],
	providers:
	[
		CitiesDataProviderService
	]
})

export class MiscModule { }
