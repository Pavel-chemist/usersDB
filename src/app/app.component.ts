import { Component, OnInit } from '@angular/core';
import { User } from './Modules/users-grid/users-grid/user.interface';
import { UserDataProviderService } from './Services/user-data-provider.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'usersDB';

  public users: User[] = [];
  public userNameOnHeader: string = "";
  public visibleItems: User[] = [];

  constructor(service: UserDataProviderService ) 
  { 
    this.users = service.getUserData();
    this.visibleItems = this.users;
    console.log('users data have been loaded');    
  }

  ngOnInit(): void {
    this.userNameOnHeader = this.firstVisibleName(this.users);
  }

  public hideUser(receivedId: number): void
  {
    let nameOfUserToHide: string = "";
    console.log(`routedClick has been catched, Id=${receivedId}`);
    for ( let i: number = 0; i < this.users.length; i++ )
    {
      if ( this.users[i].userId === receivedId )
      {
        this.users[i].isVisible = false;
        nameOfUserToHide = `${this.users[i].name.first} ${this.users[i].name.last}`;
        console.log(`${nameOfUserToHide} became invisible`);
        this.changeTopName(nameOfUserToHide);
        break;
      }
    }

  //  const user: User = this.visibleItems.find(user => {return user.userId === receivedId }); 
    //using indexOf find the index of this user 
    //using splice remove this element from VisibleItems
  }

  
  public get males()
  {
    return this.users.filter(user=>{return user.isMale}); //creates new sub-array
  }


  public hideFemales(): void
  {
     this.visibleItems = this.males;
  }

  public revealAll(): void
  {
    this.visibleItems = this.users;
  }

  private firstVisibleName( usersArray: User[] ): string
  {
    let firstVisName: string = "";

    for ( let i: number = 0; i < usersArray.length; i++ )
    {
      if ( usersArray[i].isVisible )
      {
        firstVisName = `${usersArray[i].name.first} ${usersArray[i].name.last}`;
        break;
      }
    }
    console.log(`returning "${firstVisName}"`);
    return firstVisName;
  }

   public onClickNameToTop( name: string ): void
   {
      this.userNameOnHeader = name;
   }

   private changeTopName( nameOfHiddenUser: string): void
   {
     if ( nameOfHiddenUser === this.userNameOnHeader )
     {
       this.userNameOnHeader = this.firstVisibleName(this.users);
     }
   }

   public getTitle(): string
   {
  //   console.log('qqq');
    return this.users[0].name.first;
   }
}
