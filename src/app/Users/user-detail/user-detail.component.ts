import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserService } from '../../Services/user.service';
import { User } from '../../Models/user';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  pagetitle: string = 'User Detail';
  user: User;

  constructor(
    private UserSvc: UserService,
    private route: ActivatedRoute
  ) { }

  getUserById(id) {
this.UserSvc.Get(id)
.subscribe(user => {
  this.user = user;
  console.log('User:', user);
});
  }

  ngOnInit() {
    this.route.params
    .subscribe(parms => {
     let id = parms['id'];
     this.getUserById(id);
  });
  }
}
