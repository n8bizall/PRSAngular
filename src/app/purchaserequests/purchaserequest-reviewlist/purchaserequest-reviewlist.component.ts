import { Component, OnInit } from '@angular/core';
import { PurchaseRequestService } from '../../services/purchaserequest.service';
import { PurchaseRequest } from '../../models/purchaserequest';

@Component({
  selector: 'app-purchaserequest-reviewlist',
  templateUrl: './purchaserequest-reviewlist.component.html',
  styleUrls: ['./purchaserequest-reviewlist.component.css']
})
export class PurchaserequestReviewlistComponent implements OnInit {
  pagetitle = 'Requests in Review List';
  purchaserequests: PurchaseRequest[];
  purchaserequest: PurchaseRequest;

    constructor(
      private PurchaseRequestSvc: PurchaseRequestService

    ) { }

    compareFn(v1: number, v2: number): boolean {
      return v1 === v2;
    }

    ngOnInit() {
      this.PurchaseRequestSvc.ReviewList()
      .subscribe(purchaserequests => {
        console.log(purchaserequests);
        this.purchaserequests = purchaserequests;   /*get the data and store in property of the componenet*/
        });



    }
  }
