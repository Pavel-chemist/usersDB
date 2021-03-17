import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-child',
	templateUrl: './child.component.html',
	styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

	@Input() messageFromSubject$: Observable<any>;

	public timeDisplay: string = 'placeholderValue';

	// private dateValue: Date = new Date;
	private firstMillisecondsValue: number = Date.now();

	constructor( ) 
	{ 
		
	}

	ngOnInit(): void 
	{
		this.messageFromSubject$.subscribe(
			(data: string) => 
			{ 
				console.log('data: ', data); 
				this.timeDisplay = `${data}; ${(Date.now() - this.firstMillisecondsValue)/1000} seconds.`;
			}
		);
	}

}
