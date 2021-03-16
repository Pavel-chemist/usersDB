import { Component, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Component({
	selector: 'app-parent',
	templateUrl: './parent.component.html',
	styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

	private dateValue: Date = new Date;

	private subject = new Subject<string>();
	

	constructor() { }

	ngOnInit(): void 
	{
/* 		// We subscribe to the subject
		this.subject.subscribe((data) => 
		{
			console.log("Subscriber got data >>>>> "+ data);
		});

		// We use the subject to emit data
		this.subject.next("Eureka"); */
		this.consoleSpammer(0);
	}

	private consoleSpammer( n: number ): void
	{
		n++;
		if ( n <= 10 )
		{
			console.log(`spam message #${n}; ${Date.now()}`);
			setTimeout( () => this.consoleSpammer(n), 1500);
			//TO DO
			/* 
				emit events using Subject,
				which are received by listener in Child
				and displayed there
			*/
			
		}
	}


}
