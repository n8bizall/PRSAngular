import { Component, OnInit } from '@angular/core';
import { Menu } from './menu';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuItems: Menu[] = [
    new Menu('Purshase Request System', '/home', 'The home page'),
    new Menu('About', '/about', 'The About page'),
    new Menu('Users', '/users/list', 'The user list display'),
    new Menu('Vendors', '/vendors/list', 'The vendor list display'),
    new Menu('Products', '/products/list', 'The products page'),
    new Menu('Purchase Requests', '/purchaserequests/list', 'The user list display'),
    new Menu('Review', '/purchaserequests/reviewlist', 'The review list display')


  ];

  constructor() { }

  ngOnInit() {
  }

}
