import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-child',
	templateUrl: './child.component.html',
	styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

	public timeDisplay: string = 'placeholderValue';

	private dateValue: Date = new Date;

	constructor( ) { }

	ngOnInit(): void 
	{
		console.log(this.dateValue);
		this.timeDisplay = `${this.dateValue.toDateString()} -- ${this.dateValue.toLocaleTimeString()}`;
	}

}
