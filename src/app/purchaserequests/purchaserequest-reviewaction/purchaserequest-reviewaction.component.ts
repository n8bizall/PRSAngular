import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { PurchaseRequest } from '../../models/purchaserequest';
import { PurchaseRequestService } from '../../services/purchaserequest.service';



@Component({
  selector: 'app-purchaserequest-reviewaction',
  templateUrl: './purchaserequest-reviewaction.component.html',
  styleUrls: ['./purchaserequest-reviewaction.component.css']
})
export class PurchaserequestReviewactionComponent implements OnInit {
pagetitle: string = 'Purchase Request Review';
purchaserequest: PurchaseRequest;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private UserSvc: UserService,
    private PurchaseRequestSvc: PurchaseRequestService
  ) { }

  reject(): void {
    this.purchaserequest.Status = 'REJECTED';
    this.PurchaseRequestSvc.Change(this.purchaserequest)
    .subscribe(res => {
      console.log(res);
      this.router.navigateByUrl('/purchaserequests/reviewlist');
  });
}

 approve(): void {
   this.purchaserequest.Status = 'APPROVED';
   this.PurchaseRequestSvc.Change(this.purchaserequest)
   .subscribe(res => {
     console.log(res);
     this.router.navigateByUrl('/purchaserequests/reviewlist');
   });
 }
getPurchaseRequestById(id) {
  this.PurchaseRequestSvc.Get(id)
  .subscribe(purchaserequest => {
    this.purchaserequest = purchaserequest;
    console.log('Purchase Request:', purchaserequest);
  });
    }

  ngOnInit() {
    this.route.params
      .subscribe(parms => {
       let id = parms['id'];
       this.getPurchaseRequestById(id);
    });

  }

}
