import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserDataProviderService } from 'src/app/Services/user-data-provider.service';
import { User } from './user.interface';


@Component({
  selector: 'app-users-grid',
  templateUrl: './users-grid.component.html',
  styleUrls: ['./users-grid.component.css']
})
export class UsersGridComponent implements OnInit {

  
  @Input() users: User[] = [];
  @Output() routedClick = new EventEmitter<number>();
  @Output() routedName = new EventEmitter<string>();
  
  private routedId: number = 0;
  private routedNameString: string = "";

  public CatchHideClick(id: number)
  {
    this.routedId = id;
    console.log(`HideClick is Catched; id=${id}`);
    this.routeClick(id);
  }

  public CatchMoveNameClick(name: string)
  {
    this.routedNameString = name;
    console.log(`NameToTop is Catched; name=${name}`);
    this.routeNameToTopClick(name);
  }


  
  private routeClick(id: number): void 
  {
    console.log('routing the HideClick event one level up.');
    this.routedClick.emit(id);
  }

  private routeNameToTopClick(name: string): void
  {
    console.log('routing the MoveNameToTop event one level up.');
    this.routedName.emit(name);
  }


  constructor(service: UserDataProviderService ) 
  { 
  
  }

  ngOnInit(): void {

  }

}
