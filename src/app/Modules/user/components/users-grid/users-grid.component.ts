import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { UserDataProviderService } from 'src/app/Modules/user/services/user-data-provider.service';
import { User } from '../../../shared/Interfaces/user.interface';


@Component({
  selector: 'app-users-grid',
  templateUrl: './users-grid.component.html',
  styleUrls: ['./users-grid.component.css']
})
export class UsersGridComponent implements OnInit {
  @Input() users: User[] = [];
  @Output() routedClick = new EventEmitter<number>();
  @Output() routedName = new EventEmitter<number>();

  public abc = 10;

  private routedId: number = 0;
  private routedNameId: number = 0;

  constructor(service: UserDataProviderService) {
    this.users = service.getUserData();
  }

  ngOnInit(): void {

  }

  public CatchHideClick(id: number) {
    this.routedId = id;
    console.log(`HideClick is Catched; id=${id}`);
    this.routeClick(id);
  }

  public CatchMoveNameClick(id: number) {
    this.routedNameId = id;
    console.log(`NameToTop is Catched; id=${id}`);
    this.routeNameToTopClick(id);
  }

  private routeClick(id: number): void {
    console.log('routing the HideClick event one level up.');
    this.routedClick.emit(id);
  }

  private routeNameToTopClick(id: number): void {
    console.log('routing the MoveNameToTop event one level up.');
    this.routedName.emit(id);
  }

}
