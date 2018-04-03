import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


import { PurchaseRequestLineItem } from '../../models/purchaserequestlineitem';
import { PurchaseRequestLineItemService } from '../../services/purchaserequestlineitem.service';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { PurchaseRequest } from '../../models/purchaserequest';

@Component({
  selector: 'app-prli-edit',
  templateUrl: './prli-edit.component.html',
  styleUrls: ['./prli-edit.component.css']
})
export class PrliEditComponent implements OnInit {
pagetitle = 'Purchase Request Line Items Update';
products: Product[];
prli: PurchaseRequestLineItem;
purchaserequestId: number;
purchaserequest: PurchaseRequest;



  constructor(
    private PurchaseRequestLineItemSvc: PurchaseRequestLineItemService,
    private ProductSvc: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  compareFn(v1: number, v2: number): boolean {
    return v1 === v2;
  }
  change(): void {
    console.log(this.prli);
    this.PurchaseRequestLineItemSvc.Change(this.prli)
    .subscribe(res => {
      console.log(res);
      this.router.navigateByUrl('purchaserequests/editlines/' + this.purchaserequestId);
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
        this.ProductSvc.List()
        .subscribe(products => {
          this.products = products;
          console.log('Products:', products);
        });



        this.route.params
        .subscribe(parms => {
          this.purchaserequestId = parms['rid'];
         const id = parms['id'];
         this.getPRLIById(id);
      });
  }}
