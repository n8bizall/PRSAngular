import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../../services/authentification.service';


@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router,
        private authService: AuthenticationService
    ) {

    }


    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const user = this.authService.GetUser();
        const permission = route.data['permission'];
        let userRole: string;
        let canActivate: boolean;

 console.log(state.url);

        if (!permission) {throw new Error('Permissions is not setup!'); }
        if (!permission.only.length) {throw new Error('Roles are not setup!'); }

        if (!user) {
            // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
        }

            if (user.IsAdmin) {
                userRole = 'admin';
            } else if (user.IsReviewer) {
                userRole = 'review';
            } else {
                userRole = 'user';
            }
        canActivate = permission.only.includes(userRole);

        if (!canActivate) {
            this.router.navigate(['/login'], { queryParams:{returnUrl: state.url }})
        return false;
        }

        return true;
    }
}

