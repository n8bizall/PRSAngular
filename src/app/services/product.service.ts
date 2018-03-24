import { Product } from '../models/product';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Vendor } from '../models/vendor';


const url = 'http://localhost:61566/products/';

@Injectable()
export class ProductService {

  List(): Observable<Product[]> {
    return this.http.get( url +  'List' ) as Observable<Product[]>;
  }
  Get(Id: string): Observable<Product> {
    return this.http.get(url + 'Get/' + Id) as Observable<Product>;
  }
  Create(product: Product): Observable<any> {
    return this.http.post(url + 'Create', product) as Observable<any>;
  }
  Change(product: Product): Observable<any> {
    return this.http.post(url + 'Change', product) as Observable<any>;
  }
  Remove(product: Product): Observable<any> {
    return this.http.post(url + 'Remove', product) as Observable<any>;
  }
  constructor( private http: HttpClient) { }

}
