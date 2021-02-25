import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from 'src/app/Modules/shared/Interfaces/user.interface';
import { UserDataProviderService } from '../../services/user-data-provider.service';

@Component({
	selector: 'app-edit-user-shell',
	templateUrl: './edit-user-shell.component.html',
	styleUrls: ['./edit-user-shell.component.css']
	})
export class EditUserShellComponent implements OnInit {

	public user$: Observable<User>;

	constructor( 
		private route: ActivatedRoute,
    	// private router: Router,
		private service: UserDataProviderService
	){}

	ngOnInit(): void 
	{ 
		this.user$ = this.route.paramMap.pipe(
			switchMap((params: ParamMap) =>
			  	this.service.getSingleUser(params.get('id')))
		);
	}

	public onSubmit(): void
	{
		console.log(`"Save Edits" button was clicked`);
	}

}
