import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitiesComponent } from './components/cities/cities.component';
import { FormatCityPipe } from './pipes/format-city.pipe';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { CitiesDataProviderService } from './services/cities-data-provider.service';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { InputMergerComponent } from './components/input-merger/input-merger.component';
import { RouterModule } from '@angular/router';



@NgModule(
{
	declarations: 
	[
		CitiesComponent,
		FormatCityPipe,
		ParentComponent,
		ChildComponent,
		InputMergerComponent
	],
	imports: 
	[
		CommonModule,
		MatInputModule,
		ReactiveFormsModule,
		RouterModule
	],
	providers:
	[
		CitiesDataProviderService
	]
})

export class MiscModule { }
