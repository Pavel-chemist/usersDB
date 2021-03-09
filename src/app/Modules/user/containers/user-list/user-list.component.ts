import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/Modules/shared/Interfaces/user.interface';
import { UserDataProviderService } from 'src/app/Modules/user/services/user-data-provider.service';

@Component({
	selector: 'app-user-list',
	templateUrl: './user-list.component.html',
	styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
	
	public visibleItems: User[] = []; //list of users, shown at the moment, is subset of 'users'
	public adminNickName: string = 'DefaultPlaceholderAdminName'; //should be replaced by Resolver
	private users: User[] = []; //reference list of all users, to be read-only
	constructor(service: UserDataProviderService,
				private activatedRoute: ActivatedRoute ) 
	{ 
		this.users = service.getAllUsers();
		this.revealAll(); //using this method to avoid code duplication
		console.log('users data have been loaded');    
	}

	ngOnInit(): void 
	{
		this.activatedRoute.data.subscribe( (data: any) =>
		{
			console.log('data from resolver: ', data );
			this.adminNickName = data.adminNickName;	
		});
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

	public onSignOut(): void
	{
		console.log('admin tried to sign out');
		localStorage.removeItem('signedAdmin');
	}


	private get males()
	{
		console.log(this.visibleItems);
		
		return this.visibleItems.filter(user=>{return user.isMale}); //creates new sub-array
	}

}
