import { Component, OnInit } from '@angular/core';

import { PurchaseRequest } from '../../models/purchaserequest';
import { PurchaseRequestService } from '../../services/purchaserequest.service';
import { PurchaseRequestLineItem } from '../../models/purchaserequestlineitem';
import { PurchaseRequestLineItemService } from '../../services/purchaserequestlineitem.service';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';



@Component({
  selector: 'app-purchaserequest-list',
  templateUrl: './purchaserequest-list.component.html',
  styleUrls: ['./purchaserequest-list.component.css']
})
export class PurchaserequestListComponent implements OnInit {
pagetitle = 'Purchase Request List';
purchaserequests: PurchaseRequest[];
product: Product;

  constructor(
    private PurchaseRequestSvc: PurchaseRequestService,
    private UserSvc: UserService

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
