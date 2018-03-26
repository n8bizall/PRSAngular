import { Component, OnInit } from '@angular/core';

import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { Vendor } from '../../models/vendor';
import { VendorService } from '../../services/vendor.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';





@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pagetitle = 'Product List';
  products: Product[];
  vendor: Vendor;
  constructor(private ProductSvc: ProductService) { }

  ngOnInit() {
    this.ProductSvc.List()
    .subscribe(products => {
      console.log(products);
      this.products = products;   /*get the data and store in property of the componenet*/
      });
  }

}
