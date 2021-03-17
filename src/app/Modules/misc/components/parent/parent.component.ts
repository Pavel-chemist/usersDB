import { Component, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Component({
	selector: 'app-parent',
	templateUrl: './parent.component.html',
	styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

	

	private subject = new Subject<string>();	
	public  dateVal$ = this.subject.asObservable();

	private runSpammer: boolean = true;
	private n: number = 0;

	constructor() { }

	ngOnInit(): void 
	{
		this.consoleSpammer();
	}

	public onClick(): void
	{
		console.log(`Button was clicked`);
		
		this.runSpammer = !this.runSpammer;
		console.log("run: ", this.runSpammer );
		if ( this.runSpammer )
		{
			this.consoleSpammer();
		}
	}

	private consoleSpammer(): void
	{
		let outputString: string;
		this.n++;
		if ( this.n >= 0 && this.runSpammer)
		{
			outputString = `spam message #${this.n}`;
			console.log(outputString);
			setTimeout( () => this.consoleSpammer(), 1500);
			
			//emitting the events using .next() method of Subject
			this.subject.next(outputString);
			
		}
	}



}
