import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PurchaseRequest } from '../../models/purchaserequest';
import { PurchaseRequestService } from '../../services/purchaserequest.service';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-purchaserequest-edit',
  templateUrl: './purchaserequest-edit.component.html',
  styleUrls: ['./purchaserequest-edit.component.css']
})
export class PurchaserequestEditComponent implements OnInit {

  pagetitle = 'Purchase Request Line Item Edit';
  purchaserequest: PurchaseRequest;
  users: User[];


  constructor(
    private PurchaseRequestSvc: PurchaseRequestService,
    private UserSvc: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  compareFn(v1: number, v2: number): boolean {
    return v1 === v2;
  }


change(): void {
  this.PurchaseRequestSvc.Change(this.purchaserequest)
  .subscribe(res => {
    console.log(res);
    this.router.navigateByUrl('/purchaserequests/list');
});
}

getPurchaseRequestById(id) {
  this.PurchaseRequestSvc.Get(id)
  .subscribe(purchaserequest => {
    this.purchaserequest = purchaserequest;
    console.log('Purchase Request Line Item:', purchaserequest);
  });
    }

    ngOnInit() {

      this.UserSvc.List()
      .subscribe(users => {
        this.users = users;
        console.log('Users', users);
      });

      this.route.params
      .subscribe(parms => {
       const id = parms['id'];
       this.getPurchaseRequestById(id);
    });
}}
