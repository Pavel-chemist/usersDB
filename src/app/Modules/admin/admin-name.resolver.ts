import { Injectable } from '@angular/core';
import {
	Router, Resolve,
	RouterStateSnapshot,
	ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable()

export class AdminNameResolver implements Resolve<boolean> 
{
	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> 
	{
		console.log('resolver is run');
		return of(true);
	}
}
