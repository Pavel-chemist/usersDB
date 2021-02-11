import { Injectable } from '@angular/core';
import { User } from '../../shared/Interfaces/user.interface';

@Injectable()
export class UserDataProviderService {

  private UsersArray: User[];
  private SupplementaryUsersArray: User[];
  

  public getUserData() 
  {
    this.UsersArray =
    [
      {
        userId: 1,
        name:
        {
          first: "John",
          last: "Smith"
        },
        age: 45,
        isMale: true,
        company: "English Army",
        department: "Exploration",
        photoUrl: "assets/user-photos/John_Smith.jpg",
        email: "JohnSmith@gmail.com"
      },
      {
        userId: 2,
        name:
        {
          first: "Marie",
          last: "Curie"
        },
        age: 54,
        isMale: false,
        company: "University of Paris",
        department: "Institut du Radium",
        photoUrl: "assets/user-photos/Marie_Curie.jpg",
        email: "MarieCurie@gmail.com"
      },
      {
        userId: 3,
        name:
        {
          first: "Bill",
          last: "Gates"
        },
        age: 65,
        isMale: true,
        company: 'Microsoft',
        department: 'Management',
        photoUrl: 'assets/user-photos/Bill_Gates.jpg',
        email: "BillGates@gmail.com"
      },
      {
        userId: 4,
        name:
        {
          first: "Gwynne",
          last: "Shotwell"
        },
        age: 57,
        isMale: false,
        company: "SpaceX",
        department: "Sales",
        photoUrl: "assets/user-photos/Gwynne_Shotwell.jpg",
        email: "GwynneShotwell@gmail.com"
      },
      {
        userId: 5,
        name:
        {
          first: "Elon",
          last: "Musk"
        },
        age: 49,
        isMale: true,
        company: "Tesla",
        department: "Management",
        photoUrl: "assets/user-photos/Elon_Musk.jpg",
        email: "ElonMusk@gmail.com"
      },
      {
        userId: 6,
        name:
        {
          first: "Jack",
          last: "Sparrow"
        },
        age: 35,
        isMale: true,
        company: "Brethren Court",
        department: "Piracy",
        photoUrl: "assets/user-photos/Jack_Sparrow.jpg",
        email: "JackSparrow@gmail.com"
      },
      {
        userId: 7,
        name:
        {
          first: "Brian",
          last: "Kernighan"
        },
        age: 79,
        isMale: true,
        company: "Bell Labs",
        department: "Computer Science",
        photoUrl: "assets/user-photos/Brian_Kernighan.jpg",
        email: "BrianKernighan@gmail.com"

      },
      {
        userId: 8,
        name:
        {
          first: "Ada",
          last: "Lovelace"
        },
        age: 25,
        isMale: false,
        company: "Babbage Machines",
        department: "Software research",
        photoUrl: "assets/user-photos/Ada_Lovelace.jpg",
        email: "AdaLovelace@gmail.com"
      },
      {
        userId: 9,
        name:
        {
          first: "Robert",
          last: "Oppenheimer"
        },
        age: 31,
        isMale: true,
        company: "Los-Alamos facility",
        department: "Nuclear weapons",
        photoUrl: "assets/user-photos/Robert_Oppenheimer.jpg",
        email: "RobertOppenheimer@gmail.com"
      },
      {
        userId: 10,
        name:
        {
          first: "Leia",
          last: "Organa"
        },
        age: 33,
        isMale: false,
        company: "Resistance Forces",
        department: "Commandment",
        photoUrl: "assets/user-photos/Princess_Leia.jpg",
        email: "PrincessLeia@gmail.com"
      }
    ];

    if ( localStorage['storedUsers']) 
    {
      this.SupplementaryUsersArray = JSON.parse( localStorage['storedUsers']);
      
      for ( let i: number = 0; i < this.SupplementaryUsersArray.length; i++ )
      {
        this.UsersArray.push(this.SupplementaryUsersArray[i]);
      }
    }

    

    return this.UsersArray;
  }


  // ADD user functionality
  public addNewUser( user: User ): void 
  {
    if ( user != undefined )
    {
      this.SupplementaryUsersArray.push(user);
      localStorage['storedUsers'] = JSON.stringify(this.SupplementaryUsersArray);
    }
  }

}
