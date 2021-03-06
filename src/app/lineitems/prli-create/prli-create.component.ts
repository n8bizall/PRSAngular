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
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { AuthenticationService } from '../../services/authentification.service';



@Component({
  selector: 'app-prli-create',
  templateUrl: './prli-create.component.html',
  styleUrls: ['./prli-create.component.css']
})
export class PrliCreateComponent implements OnInit {

  pagetitle = 'Line Item Create';
  prli: PurchaseRequestLineItem = new PurchaseRequestLineItem ('0', '0', '1', true, '', '', 0, 1);
  products: Product[];
  purchaserequests: PurchaseRequest[];
  purchaserequestId: number;
  purchaserequest: PurchaseRequest;
  user: User;
  users: User[];

  constructor(
    private authService: AuthenticationService,
    private UserSvc: UserService,
    private ProductSvc: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private PurchaseRequestSvc: PurchaseRequestService,
    private PurchaseRequestLineItemSvc: PurchaseRequestLineItemService
  ) { }

  compareFn(v1: number, v2: number): boolean {
    return v1 === v2;
  }


  create(): void {
    this.prli.PurchaseRequestId = this.purchaserequestId;
    console.log(this.prli);
    this.PurchaseRequestLineItemSvc.Create(this.prli)
    .subscribe(res => {
      console.log(res);
      this.router.navigateByUrl('/purchaserequests/editlines/' + this.purchaserequestId);

  });
}


getProductsList(): void {
  this.ProductSvc.List()
    .subscribe(products => {
      this.products = products;
      console.log('Products:', this.products);
   });
}

ngOnInit() {
  this.route.params
    .subscribe(parm => {
      this.purchaserequestId = +parm['id'];
      this.PurchaseRequestSvc.Get('id')
      .subscribe(purchaserequest => {
        this.purchaserequest = purchaserequest;
      });
      this.getProductsList();
    });
    this.user = this.authService.GetUser();
    this.purchaserequest.UserId = this.user.Id;
    this.UserSvc.List()
      .subscribe(users => {
        this.users = users;
        console.log('Users', this.users);
      });
}

}
