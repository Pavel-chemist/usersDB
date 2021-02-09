import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/Modules/shared/Interfaces/user.interface';

@Component({
  selector: 'app-shared-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() userData: User;

  constructor() { }

  ngOnInit(): void { }

}
