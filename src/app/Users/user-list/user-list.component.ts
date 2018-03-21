import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Services/user.service';
import { User } from '../../Models/user';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private UserSvc: UserService) { }

  ngOnInit() {
    this.UserSvc.List()
    .subscribe(users => 
      {console.log(users);});
  }

}
