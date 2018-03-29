import { Component, OnInit } from '@angular/core';

import { PurchaseRequest } from '../../models/purchaserequest';
import { PurchaseRequestService } from '../../services/purchaserequest.service';


@Component({
  selector: 'app-purchaserequest-list',
  templateUrl: './purchaserequest-list.component.html',
  styleUrls: ['./purchaserequest-list.component.css']
})
export class PurchaserequestListComponent implements OnInit {
pagetitle = 'Purchase Request List';
purchaserequests: PurchaseRequest[];


  constructor(
    private PurchaseRequestSvc: PurchaseRequestService

  ) { }

  compareFn(v1: number, v2: number): boolean {
    return v1 === v2;
  }


  ngOnInit() {
    this.PurchaseRequestSvc.List()
    .subscribe(purchaserequests => {
      console.log(purchaserequests);
      this.purchaserequests = purchaserequests;   /*get the data and store in property of the componenet*/
      });


  }

}
