import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { PurchaseRequest } from '../../models/purchaserequest';
import { PurchaseRequestService } from '../../services/purchaserequest.service';



@Component({
  selector: 'app-purchaserequest-create',
  templateUrl: './purchaserequest-create.component.html',
  styleUrls: ['./purchaserequest-create.component.css']
})
export class PurchaserequestCreateComponent implements OnInit {

  pagetitle = 'Purchase Request Create';
  purchaserequest: PurchaseRequest = new PurchaseRequest ( 0, 0, '', '', '', 'STAGED', 0, true, '', '', '', '');
  users: User[];
  purchaserequestId: number;
  user: User;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private UserSvc: UserService,
    private PurchaseRequestSvc: PurchaseRequestService
  ) { }

  compareFn(v1: number, v2: number): boolean {
    return v1 === v2;
  }


  create(): void {
    this.PurchaseRequestSvc.Create(this.purchaserequest)
    .subscribe(res => {
      console.log(res);
      this.router.navigateByUrl('/purchaserequests/list');
  });
}
 ngOnInit() {
   this.UserSvc.List()
   .subscribe(users => {
     this.users = users;
     console.log('Users', this.users);
   });


  }
}
