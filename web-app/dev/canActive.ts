/**
 * Created by phanquan on 7/16/16.
 */
import { Injectable }          from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import {AuthService} from "./services/auth.service"

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) {}
    canActivate() {
        if (this.authService.isAuth) { return true; }
        this.router.navigate(['/login']);
        return false;
    }
}

