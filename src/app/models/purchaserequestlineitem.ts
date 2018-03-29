import { PurchaseRequest } from './purchaserequest';
import { Product } from './product';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';


export class PurchaseRequestLineItem {
    Id: string;
    ProductId: string;
    Quantity: string;
    Active: boolean;
    DateCreated: string;
    DateUpdated: string;
    UpdatedByUser: string;
    PurchaseRequestId: string;

    constructor(
        Id: string,
        ProductId: string,
        Quantity: string,
        Active: boolean,
        DateCreated: string,
        DateUpdated: string,
        UpdatedByUser: string,
        PurchaseRequestId: string
    ) {
        this.Id = Id;
        this.ProductId = ProductId;
        this.Quantity = Quantity;
        this.Active = Active;
        this.DateCreated = DateCreated;
        this.DateUpdated = DateUpdated;
        this.UpdatedByUser = UpdatedByUser;
        this.PurchaseRequestId = PurchaseRequestId;

    }
}
