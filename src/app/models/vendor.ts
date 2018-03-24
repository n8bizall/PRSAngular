export class Vendor {
    Id: number;
    Code: string;
    Name: string;
    Address: string;
    City: string ;
    State: string;
    Zip: string;
    Phone: string;
    Email: string;
    IsPreApproved: boolean;
    Active: boolean;
    UpdatedByUser: number;
    constructor (
      Id: number,
      Code: string,
      Name: string,
      Address: string,
      City: string,
      State: string,
      Zip: string,
      Phone: string,
      Email: string,
      IsPreApproved: boolean,
      Active: boolean,
      UpdateByUser: string
) {
         this.Id = Id;
     this.Code = Code;
     this.Name = Name;
     this.Address = Address;
     this.City = City;
     this.State = State;
     this.Zip = Zip;
     this.Phone = Phone;
     this.Email = Email;
     this.IsPreApproved = IsPreApproved;
     this.Active = Active;
     this.UpdatedByUser = UpdateByUser;
}
}
