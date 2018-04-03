import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { User } from '../models/user';
import { PurchaseRequest } from '../models/purchaserequest';

const url = 'http://localhost:61566/purchaserequests/';

@Injectable()
export class PurchaseRequestService {

  List(): Observable<PurchaseRequest[]> {
    return this.http.get( url +  'List' ) as Observable<PurchaseRequest[]>;
  }
  Get(Id: string): Observable<PurchaseRequest> {
    return this.http.get(url + 'Get/' + Id) as Observable<PurchaseRequest>;
  }
  Create(purchaserequest: PurchaseRequest): Observable<any> {
    return this.http.post(url + 'Create', purchaserequest) as Observable<any>;
  }
  Change(purchaserequest: PurchaseRequest): Observable<any> {
    return this.http.post(url + 'Change', purchaserequest) as Observable<any>;
  }
  Remove(purchaserequest: PurchaseRequest): Observable<any> {
    return this.http.post(url + 'Remove', purchaserequest) as Observable<any>;
  }
  ReviewList(): Observable<any> {
    return this.http.get(url + 'ReviewList') as Observable<any>;
  }
  constructor( private http: HttpClient) { }

}

