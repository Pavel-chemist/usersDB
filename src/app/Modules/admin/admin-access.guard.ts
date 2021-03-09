import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AdminAccessGuard implements CanActivate 
{
	constructor( private router: Router) {}

	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree 
	{
		let permission: boolean = !!localStorage['signedAdmin'];
		console.log('Guard route:', route);
		console.log('Guard state:', state);

		if (permission)
		{
			return true;
		}
		else
		{
			this.router.navigate(['/admin-login']);
			return false;
		}
	}
  
}
                                                                                       