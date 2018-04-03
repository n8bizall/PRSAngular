import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from '../services/alert.service';
import { UserService } from '../services/user.service';


@Component({
    moduleId: module.id,
    templateUrl: 'register.component.html'
})

export class RegisterComponent {
    model: any = {};
    loading = false;

    constructor(
        private router: Router,
        private UserSvc: UserService,
        private AlertSvc: AlertService) { }

    register() {
        this.loading = true;
        this.UserSvc.Create(this.model)
            .subscribe(
                data => {
                    // set success message and pass true paramater to persist the message after redirecting to the login page
                    this.AlertSvc.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    this.AlertSvc.error(error);
                    this.loading = false;
                });
    }
}
