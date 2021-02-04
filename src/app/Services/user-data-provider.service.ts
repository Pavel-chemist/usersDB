import { Injectable } from '@angular/core';
import { User } from '../Interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})


export class UserDataProviderService {

  private arrayOfUserObjects: User[] =
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
      photoUrl: "assets/user-photos/John_Smith.jpg"
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
      photoUrl: "assets/user-photos/Marie_Curie.jpg"
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
      photoUrl: 'assets/user-photos/Bill_Gates.jpg'
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
      photoUrl: "assets/user-photos/Gwynne_Shotwell.jpg"
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
      photoUrl: "assets/user-photos/Elon_Musk.jpg"
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
      photoUrl: "assets/user-photos/Jack_Sparrow.jpg"
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
      photoUrl: "assets/user-photos/Brian_Kernighan.jpg"
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
      photoUrl: "assets/user-photos/Ada_Lovelace.jpg"
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
      photoUrl: "assets/user-photos/Robert_Oppenheimer.jpg"
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
      photoUrl: "assets/user-photos/Princess_Leia.jpg"
    } 
  ]; 

  public getUserData() 
  {
    return this.arrayOfUserObjects;
  }

}
