import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { User } from 'src/app/Modules/shared/Interfaces/user.interface';
import { UserDataProviderService } from '../../services/user-data-provider.service';

@Component({
	selector: 'app-edit-user-shell',
	templateUrl: './edit-user-shell.component.html',
	styleUrls: ['./edit-user-shell.component.css']
})
export class EditUserShellComponent implements OnInit {

	public user: User;

	constructor(
		private route: ActivatedRoute,
		private service: UserDataProviderService
	) { }

	ngOnInit(): void {
		const userId = this.route.snapshot.params.id;
		this.service.getSingleUser(userId)
			.pipe(take(1))
			.subscribe(data => {
				this.user = data;
				console.log('User', data);
			});
	}

	public onSubmit(): void {
		console.log(`"Save Edits" button was clicked`);
	}

}
