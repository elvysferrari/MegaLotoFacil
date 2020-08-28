import { Router, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';

@Injectable()

export class AuthGuard implements CanActivate {
    public constructor(private router: Router, private auth: AuthService) {

    }

    public canActivate() {
        //return true;
        
        if (this.auth.isLoggedIn) {
            return true;
        } else {
            this.router.navigate(['login']);
            return false;
        }
    }
}