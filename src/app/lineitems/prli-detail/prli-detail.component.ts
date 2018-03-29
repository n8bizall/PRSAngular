import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PurchaseRequestLineItem } from '../../models/purchaserequestlineitem';
import { PurchaseRequestLineItemService } from '../../services/purchaserequestlineitem.service';
import { PurchaseRequest } from '../../models/purchaserequest';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-prli-detail',
  templateUrl: './prli-detail.component.html',
  styleUrls: ['./prli-detail.component.css']
})
export class PrliDetailComponent implements OnInit {

  pagetitle: string = 'Line Item Detail';
  prli: PurchaseRequestLineItem;
  purchaserequestId: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private PurchaseRequestLineItemSvc: PurchaseRequestLineItemService
  ) { }

  remove(): void {
    this.PurchaseRequestLineItemSvc.Remove(this.prli)
    .subscribe(res => {
      console.log(res);
      this.router.navigateByUrl('/purchaserequest/line/' + this.purchaserequestId);
    });

    }

    getPRLIById(id) {
  this.PurchaseRequestLineItemSvc.Get(id)
  .subscribe(prli => {
    this.prli = prli;
    console.log('Line Item:', prli);
  });
    }
    ngOnInit() {
      this.route.params
      .subscribe(parms => {
      this.purchaserequestId = parms['  rid'];
       let id = parms['id'];
       this.getPRLIById(id);
    });
    }
  }
