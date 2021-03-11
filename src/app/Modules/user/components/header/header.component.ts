import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit 
{

	@Input() username: string = "";

	public firstVisibleName: string = "";
	
	constructor( private router: Router ) {}

	ngOnInit(): void 
	{
	
	}

	public onNameToTop ( name: string )
	{
		this.firstVisibleName = name;
	}

	public onAddUserClick(): void
	{
		console.log('"Add User" button was clicked');
		this.router.navigate(['user/add-user-form']);
	}

}
