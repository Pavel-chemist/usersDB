import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { EditUserShellComponent } from '../user/containers/edit-user-shell/edit-user-shell.component';

@Injectable()

export class UnsavedChangesGuard implements CanDeactivate<EditUserShellComponent> 
{
	canDeactivate(
		component: EditUserShellComponent,
		currentRoute: ActivatedRouteSnapshot,
		currentState: RouterStateSnapshot, 
		nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree 
	{
		console.log('deactivating path: data submission status: ', component.isChanged() );

		return component.isChanged();
	}
  
}


