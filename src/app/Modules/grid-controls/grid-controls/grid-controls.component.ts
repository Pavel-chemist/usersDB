import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { User } from '../../users-grid/users-grid/user.interface';

@Component({
  selector: 'app-grid-controls',
  templateUrl: './grid-controls.component.html',
  styleUrls: ['./grid-controls.component.css']
})
export class GridControlsComponent implements OnInit {

  @Input() users: User[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  @Output() clickHideFemales = new EventEmitter();
  @Output() clickRevealAll = new EventEmitter();

  public onHideFemalesClick()
  {
    console.log(`All females tried to hide.`);
    this.clickHideFemales.emit();
  }

  public onRevealAllClick()
  {
    console.log(`Revealing all hidden users:`);
    this.clickRevealAll.emit();
  }

}
