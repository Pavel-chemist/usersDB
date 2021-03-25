import { CompileShallowModuleMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of, Subject } from 'rxjs';
import { mergeMap } from 'rxjs/internal/operators/mergeMap';

@Component({
	selector: 'app-input-merger',
	templateUrl: './input-merger.component.html',
	styleUrls: ['./input-merger.component.css']
})

export class InputMergerComponent implements OnInit {

	public inputOne: FormControl = new FormControl( '' );
	public inputTwo: FormControl = new FormControl( '' );

	public mergedValue: string = '';
	private mergedValueByMergeMap: Observable<string> = of('qwer'); //= MergeMap( this.inputOne.valueChanges.subscribe(x => console.log(x)) );
	public otputValueByMM: string;

	private inputSubjOne = new Subject<any>();
	private inputSubjTwo = new Subject<any>();


	constructor() { }

	ngOnInit(): void 
	{
		this.echoInputs();
		this.outputMergedValue();
	}

	private outputMergedValue(): void
	{
		// this.mergedValueByMergeMap = mergeMap( value => value = '' );
		this.mergedValueByMergeMap.subscribe( value => this.otputValueByMM = value );
	}

	private echoInputs(): void
	{
		// let mergedString: string = '';
		let valOne: string = '';
		let valTwo: string = '';

		this.inputOne.valueChanges.subscribe( value => 
			{
				console.log('value in input#1: ', value);
				if ( value.length > valOne.length )
				{
					console.log(this.inputOne);
					this.mergedValue += value.slice(-1);
					valOne = value;
				}
				else if ( value.length < valOne.length )
				{
					valOne = value;
					console.log(`strig is ${valOne}, its length is ${valOne.length}`)
				}
			}
		);

		this.inputTwo.valueChanges.subscribe( value => 
			{
				console.log('value in input#2: ',value);
				if ( value.length > valTwo.length )
				{ 
					console.log(this.inputTwo);
					this.mergedValue += value.slice(-1);
					valTwo = value;
				}
				else if ( value.length < valTwo.length )
				{
					valTwo = value;
				}
			} 
		);

		// this.mergedValue = mergedString;
	}




}
/* 
function MergeMap() {
	throw new Error('Function not implemented.');
}
 */
