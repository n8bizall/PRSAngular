import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { PurchaseRequest } from '../../models/purchaserequest';
import { PurchaseRequestService } from '../../services/purchaserequest.service';
import { AuthenticationService } from '../../services/authentification.service';




@Component({
  selector: 'app-purchaserequest-create',
  templateUrl: './purchaserequest-create.component.html',
  styleUrls: ['./purchaserequest-create.component.css']
})
export class PurchaserequestCreateComponent implements OnInit {

  pagetitle = 'Purchase Request Create';
  purchaserequest: PurchaseRequest = new PurchaseRequest ( 0, 0, '', '', '', 'NEW', 0, true, '' , '', '', '');
  users: User[];
  purchaserequestId: number;
  user: User;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private UserSvc: UserService,
    private PurchaseRequestSvc: PurchaseRequestService,
    private authService: AuthenticationService
  ) { }

  compareFn(v1: number, v2: number): boolean {
    return v1 === v2;
  }


  create(): void { // need local guy here
    this.user.Id = this.purchaserequest.UserId;
    this.PurchaseRequestSvc.Create(this.purchaserequest)
    .subscribe(res => {
      console.log(res);
      this.router.navigateByUrl('/purchaserequests/editlines/' + res.Data.Id);
  });
}
 ngOnInit() {
  this.user = this.authService.GetUser();
    this.purchaserequest.UserId = this.user.Id;
    this.UserSvc.List()
      .subscribe(users => {
        this.users = users;
        console.log('Users', this.users);
      });
  }
}
