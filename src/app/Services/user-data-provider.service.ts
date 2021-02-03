import { Injectable } from '@angular/core';
import { User } from '../Modules/users-grid/users-grid/user.interface';

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
      age: 30,
      isMale: true,
      isVisible: true
    },
    {
      userId: 2,
      name: 
      {
        first: "Maria",
        last: "Curie"
      },
      age: 54,
      isMale: false,
      isVisible: true
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
      isVisible: true
    },
    {
      userId: 4,
      name: 
      {
        first: "User1",
        last: "Qwer"
      },
      age: 40,
      isMale: false,
      isVisible: true
    },
    {
      userId: 5,
      name: 
      {
        first: "User2",
        last: "Asdf"
      },
      age: 21,
      isMale: true,
      isVisible: true
    },
    {
      userId: 6,
      name: 
      {
        first: "User3",
        last: "Zxcv"
      },
      age: 27,
      isMale: true,
      isVisible: true
    },
    {
      userId: 7,
      name: 
      {
        first: "User4",
        last: "Rtyu"
      },
      age: 38,
      isMale: false,
      isVisible: true
    },
    {
      userId: 8,
      name: 
      {
        first: "User5",
        last: "Fghj"
      },
      age: 25,
      isMale: false,
      isVisible: true
    },
    {
      userId: 9,
      name: 
      {
        first: "User6",
        last: "Vbnm"
      },
      age: 31,
      isMale: true,
      isVisible: true
    },
    {
      userId: 10,
      name: 
      {
        first: "User7",
        last: "Lkjh"
      },
      age: 24,
      isMale: false,
      isVisible: true
    } 
  ]; 

  public getUserData() 
  {
    return this.arrayOfUserObjects;
  }

}
