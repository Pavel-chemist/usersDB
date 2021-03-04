import { Injectable } from '@angular/core';
import { Admin } from '../admin.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginCheckerService {


	public admins: Admin[] =
	[
		{
			id: 1,
			login: "admin",
			password: "zzz",
			nickName: "GreatOverlord"
		}
	];

	constructor() { }

	public checkCredentials(creds: { login: string; password: string; } ): boolean
	{
		console.log("checking credentials...");
		console.log(creds);
		return true;
	}


}
