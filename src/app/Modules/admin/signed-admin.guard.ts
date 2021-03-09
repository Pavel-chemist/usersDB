import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  	providedIn: 'root'
})
export class SignedAdminGuard implements CanActivate 
{
	constructor( private router: Router) {}

	canActivate(route: ActivatedRouteSnapshot,	state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree 
	{
		console.log('signedAdmin guard activated');

		let isSigned: boolean = !!localStorage['signedAdmin'];

		console.log(`admin login status: ${isSigned ? 'signed in' : 'not signed in'}`);

		if (isSigned)
		{
			this.router.navigate(['/user-list']);
		}
		
		return !isSigned;
	}
  
}
