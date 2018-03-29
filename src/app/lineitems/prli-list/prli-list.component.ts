import { Component, OnInit } from '@angular/core';



import { PurchaseRequestLineItem } from '../../models/purchaserequestlineitem';
import { PurchaseRequestLineItemService } from '../../services/purchaserequestlineitem.service';
import { PurchaseRequest } from '../../models/purchaserequest';
import { PurchaseRequestService } from '../../services/purchaserequest.service';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { ActivatedRoute, Router, Route } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-prli-list',
  templateUrl: './prli-list.component.html',
  styleUrls: ['./prli-list.component.css']
})

export class PrliListComponent implements OnInit {
  pagetitle = 'Purchase Request Line Item List';
  prlis: PurchaseRequestLineItem[];
  purchaserequest: PurchaseRequest;
  user: User;
  prli: PurchaseRequestLineItem;

  constructor(
    private PurchaseRequestLineItemSvc: PurchaseRequestLineItemService,
    private PurchaseRequestSvc: PurchaseRequestService,
    private UserSvc: UserService,
    private route: ActivatedRoute

  ) { }

 getPurchaseRequestById(id) {
    this.PurchaseRequestSvc.Get(id)
    .subscribe(purchaserequest => {
      this.purchaserequest = purchaserequest;
      console.log('PurchaseRequest:', purchaserequest);
    });
  }


  ngOnInit() {
    let id = 0;
    this.route.params
      .subscribe(parm => {
        id = +parm['id'];
        this.getPurchaseRequestById(id);
      });
      this.PurchaseRequestLineItemSvc.List()
        .subscribe(prlis => {
          this.prlis = prlis;
       console.log ( 'Line Items:', prlis);
         } );


  }

}
