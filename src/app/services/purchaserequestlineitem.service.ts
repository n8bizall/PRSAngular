import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { PurchaseRequestLineItem } from '../models/purchaserequestlineitem';
import { Product } from '../models/product';
import { PurchaseRequest } from '../models/purchaserequest';



const url = 'http://localhost:61566/purchaserequestlintitems/';

@Injectable()
export class PurchaseRequestLineItemService {

  List(): Observable<PurchaseRequestLineItem[]> {
    return this.http.get( url +  'List' ) as Observable<PurchaseRequestLineItem[]>;
  }
  Get(Id: string): Observable<PurchaseRequestLineItem> {
    return this.http.get(url + 'Get/' + Id) as Observable<PurchaseRequestLineItem>;
  }
  Create(purchaserequestlineitem: PurchaseRequestLineItem): Observable<any> {
    return this.http.post(url + 'Create', purchaserequestlineitem) as Observable<any>;
  }
  Change(purchaserequestlineitem: PurchaseRequestLineItem): Observable<any> {
    return this.http.post(url + 'Change', purchaserequestlineitem) as Observable<any>;
  }
  Remove(purchaserequestlineitem: PurchaseRequestLineItem): Observable<any> {
    return this.http.post(url + 'Remove', purchaserequestlineitem) as Observable<any>;
  }
  constructor( private http: HttpClient) { }

}
