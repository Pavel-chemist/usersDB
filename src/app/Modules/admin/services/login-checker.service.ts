import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Admin, Creds } from '../admin.interface';

@Injectable()

export class LoginCheckerService {


	public admins: Admin[] =
	[
		{
			id: 1,
			login: "admin",
			password: "zzz",
			nickName: "GreatOverlord"
		},
		{
			id: 2,
			login: "superadmin",
			password: "asd",
			nickName: "Pavel-chemist"
		}
	];

	constructor() { }

	public checkCredentials(creds: Creds ): Observable<boolean>
	{
		console.log("checking credentials...");
		console.log(creds);

		let foundAdmin: Admin | undefined = this.admins.find( admin => admin.login === creds.login && admin.password === creds.password );

		console.log('found admin is: ', foundAdmin);

		if (!!foundAdmin)
		{
			localStorage['signedAdmin'] = JSON.stringify({ adminId: foundAdmin.id });
		}

		return of(!!foundAdmin).pipe(delay(1000));
	}

	public getUserNameById( id: number ): Observable<string|undefined>
	{
		console.log('got id: ', id);

		let adminNickName: string | undefined = this.admins.find( admin => admin.id === id)?.nickName;

		console.log('found nickname: ', adminNickName);

		return of(adminNickName).pipe(delay(1000));
	}

}

