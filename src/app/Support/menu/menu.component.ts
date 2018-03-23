import { Component, OnInit } from '@angular/core';
import { Menu } from './menu';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuItems: Menu[] = [
    new Menu('Home', '/home', 'The home page'),
    new Menu('About', '/about', 'The About page'),
    new Menu('Users', '/users/list', 'The user list display')
  ];

  constructor() { }

  ngOnInit() {
  }

}
