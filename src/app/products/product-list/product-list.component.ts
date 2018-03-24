import { Component, OnInit } from '@angular/core';

import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pagetitle = 'Product List';
  products: Product[];
  constructor(private ProductSvc: ProductService) { }

  ngOnInit() {
    this.ProductSvc.List()
    .subscribe(products => {
      console.log(products);
      this.products = products;   /*get the data and store in property of the componenet*/
      });
  }

}
