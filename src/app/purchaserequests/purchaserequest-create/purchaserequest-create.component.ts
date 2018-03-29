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
  purchasrequest: PurchaseRequest = new PurchaseRequest ('', '', '', '', '', '', '', true, '', '', '', '');
  users: User[];
  purchaserequestId: number;

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
    this.PurchaseRequestSvc.Create(this.purchasrequest)
    .subscribe(res => {
      console.log(res);
      this.router.navigateByUrl('/purchasrequests/list');
  });
}
 ngOnInit() {
   this.UserSvc.List()
   .subscribe(users => {
     this.users = users;
     console.log('Users', this.users);
   });
   this.route.params
   .subscribe(parms => {
     this.purchaserequestId = parms['prid'];
     console.log('prid:', this.purchaserequestId);
   });

  }
}
