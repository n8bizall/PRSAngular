import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PurchaseRequestService } from '../../services/purchaserequest.service';
import { PurchaseRequest } from '../../models/purchaserequest';
import { PurchaseRequestLineItemService } from '../../services/purchaserequestlineitem.service';
import { PurchaseRequestLineItem } from '../../models/purchaserequestlineitem';


@Component({
  selector: 'app-purchaserequest-editlines',
  templateUrl: './purchaserequest-editlines.component.html',
  styleUrls: ['./purchaserequest-editlines.component.css']
})
export class PurchaseRequestEditLinesComponent implements OnInit {

  pagetitle = 'Purchase Request Lines';
  purchaserequest: PurchaseRequest;
  isHidden = true;

  constructor(
    private PurchaseRequestSvc: PurchaseRequestService,
    private PurchaseRequestLineitemSvc: PurchaseRequestLineItemService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

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
        const id = parms['id'];
        this.getPurchaseRequestById(id);
      });

  }

}
