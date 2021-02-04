import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../../../../Interfaces/user.interface';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input() userData: User = //following object literal is just a placeholder, for initializitaion
  {
    userId: 0,
    name:
    {
        first: "john",
        last: "smith"
    },
    age: 32,
    isMale: true,
    company: "",
    department: "",
    photoUrl: ""
  };  
  
  @Output() clickHideUser = new EventEmitter<number>();
  @Output() clickNameToTop = new EventEmitter<number>();
  
  public onHideUserClick(): void
  {
    console.log(`User ${this.userData.name.first} ${this.userData.name.last} (Id=${this.userData.userId}) tried to hide.`);
    this.clickHideUser.emit(this.userData.userId);
  }

  public onNameToTopClick(): void
  {
    console.log(`Placing ${this.userData.name.first} ${this.userData.name.last}'s name to header.`);
    this.clickNameToTop.emit(this.userData.userId);
  }

  constructor() 
  {
    
  }

  ngOnInit(): void {
  }

}
