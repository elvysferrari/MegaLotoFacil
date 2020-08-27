import { Router, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()

export class AuthGuard implements CanActivate {
    public constructor(private router: Router) {

    }

    public canActivate() {
        return true;
        /*if (this.userService.usuarioAuthenticado) {
            return true;
        } else {
            this.router.navigateByUrl('login');
            return false;
        }*/
    }
}