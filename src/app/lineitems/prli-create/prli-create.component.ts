import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


import { PurchaseRequestLineItem } from '../../models/purchaserequestlineitem';
import { PurchaseRequestLineItemService } from '../../services/purchaserequestlineitem.service';
import { PurchaseRequest } from '../../models/purchaserequest';
import { PurchaseRequestService } from '../../services/purchaserequest.service';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { HomeComponent } from '../../Support/home/home.component';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-prli-create',
  templateUrl: './prli-create.component.html',
  styleUrls: ['./prli-create.component.css']
})
export class PrliCreateComponent implements OnInit {

  pagetitle: string = 'Line Item Create';
  prli: PurchaseRequestLineItem = new PurchaseRequestLineItem ('0', '0', '0', true, '', '', '0', '8');
  products: Product[];
  purchaserequests: PurchaseRequest[];
  constructor(
    private ProductSvc: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private PurchaseRequestSvc: PurchaseRequestService,
    private PurchaseRequestLineItemSvc: PurchaseRequestLineItemService
  ) { }


  create(): void {
    this.PurchaseRequestLineItemSvc.Create(this.prli)
    .subscribe(res => {
      console.log(res);
      this.router.navigateByUrl('/purchaserequestlineitems/list');
  });
}
 ngOnInit() {
   this.ProductSvc.List()
   .subscribe(products => {
     this.products = products;
     console.log('Products', this.products);

  this.PurchaseRequestSvc.List()
  .subscribe(purchaserequests => {
    this.purchaserequests = purchaserequests;
    console.log('PurchaseRequests', this.purchaserequests);
  }

  );
   });
  }

}
