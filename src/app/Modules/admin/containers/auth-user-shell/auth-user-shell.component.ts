import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-auth-user-shell',
    templateUrl: './auth-user-shell.component.html',
    styleUrls: ['./auth-user-shell.component.css']
})
export class AuthUserShellComponent implements OnInit {

    public adminNickName: string = 'DefaultPlaceholderAdminName'; //should be replaced by Resolver

    constructor( private activatedRoute: ActivatedRoute ) { }

    
    ngOnInit(): void 
	{
		this.activatedRoute.data.subscribe( (data: any) =>
		{
			console.log('data from resolver: ', data );
			this.adminNickName = data.adminNickName;	
		});
	}
    

    public onSignOut(): void
    {
        console.log('admin tried to sign out');
        localStorage.removeItem('signedAdmin');
    }

}
