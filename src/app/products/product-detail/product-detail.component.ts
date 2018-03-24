import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';



@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pagetitle: string = 'Product Detail';
  product: Product;

  constructor(
    private ProdcutSvc: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  remove(): void {
  this.ProdcutSvc.Remove(this.product)
  .subscribe(res => {
    console.log(res);
    this.router.navigateByUrl('/products/list');
  });

  }

  getProductById(id) {
this.ProdcutSvc.Get(id)
.subscribe(product => {
  this.product = product;
  console.log('Product:', product);
});
  }

  ngOnInit() {
    this.route.params
    .subscribe(parms => {
     let id = parms['id'];
     this.getProductById(id);
  });
  }
}
