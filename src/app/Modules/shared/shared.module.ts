import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { MatCardModule } from '@angular/material/card';
import { UserPIFieldsComponent } from './components/user-pi/user-pi-fields.component';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { Page404Component } from './components/page404/page404.component';



@NgModule({
	declarations: [CardComponent, UserPIFieldsComponent, Page404Component ],
	imports: [
		CommonModule,
		MatCardModule,
		MatInputModule,
		MatIconModule,
		MatButtonModule,
		ReactiveFormsModule,
		RouterModule
	],
	exports: [CardComponent, UserPIFieldsComponent, Page404Component]
})
export class SharedModule { }
