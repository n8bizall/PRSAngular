import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { PurchaseRequest } from '../../models/purchaserequest';
import { PurchaseRequestService } from '../../services/purchaserequest.service';



@Component({
  selector: 'app-purchaserequest-detail',
  templateUrl: './purchaserequest-detail.component.html',
  styleUrls: ['./purchaserequest-detail.component.css']
})
export class PurchaserequestDetailComponent implements OnInit {

  pagetitle: string = 'Purchase Request Detail';
  purchaserequest: PurchaseRequest;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private UserSvc: UserService,
    private PurchaseRequestSvc: PurchaseRequestService
  ) { }

  remove(): void {
    this.PurchaseRequestSvc.Remove(this.purchaserequest)
    .subscribe(res => {
      console.log(res);
      this.router.navigateByUrl('/purchaserequests/list');
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
