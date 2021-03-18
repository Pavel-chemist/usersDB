import { CompileShallowModuleMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
	selector: 'app-input-merger',
	templateUrl: './input-merger.component.html',
	styleUrls: ['./input-merger.component.css']
})

export class InputMergerComponent implements OnInit {

	public inputOne: FormControl = new FormControl( '' );
	public inputTwo: FormControl = new FormControl( '' );

	public mergedValue: string = '';
	
	constructor() { }

	ngOnInit(): void 
	{
		this.echoInputs();
	}

	private echoInputs(): void
	{
		// let mergedString: string = '';

		this.inputOne.valueChanges.subscribe( value => 
			{
				console.log('value in input#1: ', value);
				console.log(this.inputOne);
				this.mergedValue += value.slice(-1);
			}
		);

		this.inputTwo.valueChanges.subscribe( value => 
			{
				console.log('value in input#2: ',value); 
				this.mergedValue += value.slice(-1);
			} 
		);

		// this.mergedValue = mergedString;
	}
}
