import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/Modules/shared/Interfaces/user.interface';

@Component({
  selector: 'app-shared-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() userData: User = //following is placeholder
    {
      userId: 1,
      name:
      {
        first: 'Bill',
        last: 'Gates'
      },
      age: 65,
      isMale: true,
      company: 'Microsoft',
      department: 'Management',
      photoUrl: 'assets/user-photos/Bill_Gates.jpg'
    };

  constructor() { }

  ngOnInit(): void { }

}
