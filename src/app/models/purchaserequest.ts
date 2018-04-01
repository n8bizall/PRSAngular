import { User } from './user';
export class PurchaseRequest {
    Id: number;
    UserId: number;
    Description: string;
    Justification: string;
    DeliveryMode: string;
    Status: string;
    Total: number;
    Active: boolean;
    ReasonForRejection: string;
    DateCreated: string;
    DateUpdated: string;
    UpdatedByUser: string;
    constructor(
        Id: number,
        UserId: number,
        Description: string,
        Justification: string,
        DeliveryMode: string,
        Status: string,
        Total: number,
        Active: boolean,
        ReasonForRejection: string,
        DateCreated: string,
        DateUpdated: string,
        UpdatedByUser: string
    ) {
         this.Id = Id;
         this.UserId = UserId;
         this.Description = Description;
         this.Justification = Justification;
         this. DeliveryMode = DeliveryMode;
         this.Status = Status;
         this.Total = Total;
         this.Active = Active;
         this.ReasonForRejection = ReasonForRejection;
         this.DateCreated = DateCreated;
         this. DateUpdated = DateUpdated;
         this.UpdatedByUser = UpdatedByUser;



    }
}
