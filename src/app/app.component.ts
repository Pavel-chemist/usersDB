import { Component, OnInit } from '@angular/core';
import { TitleName } from './Modules/shared/Interfaces/title-name.interface';
import { User } from './Modules/shared/Interfaces/user.interface';
import { UserDataProviderService } from './Modules/user/services/user-data-provider.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  
  public title: string = 'usersDB';  
  public userNameOnHeader: TitleName = { name: "", isMale: true };

  private users: User[] = []; //reference list of all users, to be read-only
  public visibleItems: User[] = []; //list of users, shown at the moment, is subset of 'users'

  constructor(service: UserDataProviderService ) 
  { 
    this.users = service.getUserData();
    this.revealAll(); //using this method to avoid code duplication
    console.log('users data have been loaded');    
  }

  ngOnInit(): void {
    this.userNameOnHeader = this.firstVisibleName();
  }

  public hideUser(receivedId: number): void
  {
    let nameOfUserToHide: string = "";    
    let userIndexToHide: number = 0;

    let user: User | undefined = this.visibleItems.find(user => { return user.userId === receivedId }); 
    if ( user != undefined )
    {
      console.log(`User Id is ${user.userId}`);      
      userIndexToHide = this.visibleItems.indexOf(user);
      nameOfUserToHide = `${this.visibleItems[userIndexToHide].name.first} ${this.visibleItems[userIndexToHide].name.last}`;
      console.log(`Its array index is ${userIndexToHide}`);
      this.visibleItems.splice(userIndexToHide, 1);
      console.log(`${nameOfUserToHide} became invisible`);
      this.changeTopName( nameOfUserToHide);
    } 
  }

  
  public get males()
  {
    return this.visibleItems.filter(user=>{return user.isMale}); //creates new sub-array
  }


  public hideFemales(): void
  {
     this.visibleItems = this.males; //using getter above
     console.log(`All females hid.`);
     if ( !this.userNameOnHeader.isMale )
     {
       console.log('Name on top belongs to one of the females, which were hidden.');
       this.userNameOnHeader = this.firstVisibleName();
       console.log('This name is updated.');
     }
  }

  public revealAll(): void
  {
    console.log(`There are ${this.visibleItems.length} users shown out of total ${this.users.length}.`);
    this.visibleItems = this.users.slice();
    console.log(`Now their number is ${this.visibleItems.length}.`);
    console.log(`Revealing all hidden users.`);
  }



   public onClickNameToTop( receivedId: number ): void
   {
      //find name by id
      let user: User | undefined = this.visibleItems.find(user => { return user.userId === receivedId });
      if ( user != undefined )
      {
        this.userNameOnHeader.name = `${user.name.first} ${user.name.last}`;
        this.userNameOnHeader.isMale = user.isMale;
      }
      //else do nothing
   }

   private firstVisibleName(): TitleName
   {
     return { 
              name: `${this.visibleItems[0].name.first} ${this.visibleItems[0].name.last}`, 
              isMale: this.visibleItems[0].isMale
            };
   }


   private changeTopName( nameOfHiddenUser: string): void
   {
     if ( nameOfHiddenUser === this.userNameOnHeader.name )
     {
       this.userNameOnHeader = this.firstVisibleName();
     }
   }

   public getTitle(): string
   {
    return this.userNameOnHeader.name;
   }
}
