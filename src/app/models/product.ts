import { Vendor } from './vendor';
export class Product {
    Id: number;
    VendorId: string;
    PartNumber: string;
    Name: string;
    Price: string;
    Unit: string;
    PhotoPath: string;
    Active: boolean;
    DateCreated: string;
    DateUpdated: string;
    UpdatedByUser: string;
    constructor (
        Id: number,
        VendorId: string,
        PartNumber: string,
        Name: string,
        Price: string,
        Unit: string,
        PhotoPath: string,
        Active: boolean,
        DateCreated: string,
        DateUpdated: string,
        UpdatedByUser: string
    ) {
    this.Id = Id;
    this.VendorId = VendorId;
    this.PartNumber = PartNumber;
    this.Name = Name;
    this.Price = Price;
    this.Unit = Unit;
    this.PhotoPath = PhotoPath;
    this.Active = Active;
    this.DateCreated = DateCreated;
    this.DateUpdated = DateUpdated;
    this.UpdatedByUser = UpdatedByUser;
}
}
