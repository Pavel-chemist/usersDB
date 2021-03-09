import { Injectable } from '@angular/core';
import {
	Router, Resolve,
	RouterStateSnapshot,
	ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { LoginCheckerService } from './services/login-checker.service';

@Injectable()

export class AdminNameResolver implements Resolve<boolean> 
{
	constructor( private service: LoginCheckerService ){}

	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> 
	{
		console.log('resolver is run');

		let id: number = JSON.parse(localStorage['signedAdmin']).adminId;
		return this.service.getUserNameById(id);
	}
}
