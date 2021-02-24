import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Modules/shared/Interfaces/user.interface';
import { UserDataProviderService } from 'src/app/Modules/user/services/user-data-provider.service';

@Component({
	selector: 'app-user-list',
	templateUrl: './user-list.component.html',
	styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

	private users: User[] = []; //reference list of all users, to be read-only
	public visibleItems: User[] = []; //list of users, shown at the moment, is subset of 'users'

	constructor(service: UserDataProviderService ) 
	{ 
		this.users = service.getUserData();
		this.revealAll(); //using this method to avoid code duplication
		console.log('users data have been loaded');    
	}

	ngOnInit(): void {
	}

	public hideFemales(): void
	{
     	this.visibleItems = this.males;
  	}

	public revealAll(): void
	{
    	this.visibleItems = this.users.slice();
  	}

	public hideUser(receivedId: number): void
	{
		let nameOfUserToHide: string = "";    
		let userIndexToHide: number = 0;

		let user: User | undefined = this.visibleItems.find(user => { return user.userId === receivedId }); 
		if ( user != undefined )
		{
		  userIndexToHide = this.visibleItems.indexOf(user);
		  nameOfUserToHide = `${this.visibleItems[userIndexToHide].name.first} ${this.visibleItems[userIndexToHide].name.last}`;     
		  this.visibleItems.splice(userIndexToHide, 1);     
		} 
  	}

	private get males()
	{
		console.log(this.visibleItems);
		
		return this.visibleItems.filter(user=>{return user.isMale}); //creates new sub-array
	}

}
