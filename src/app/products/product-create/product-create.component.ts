import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

import { Vendor } from '../../models/vendor';
import { VendorService } from '../../services/vendor.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  pagetitle: string = 'Product Create';
  product: Product = new Product (0, '', '', '', '', '', '', true, '', '', '');

  constructor(
    private UserSvc: UserService,
    private ProductSvc: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  create(): void {
    this.ProductSvc.Create(this.product)
    .subscribe(res => {
      console.log(res);
      this.router.navigateByUrl('/products/list');
  });
}
 ngOnInit() {
  }

}
