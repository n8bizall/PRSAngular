import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Vendor } from '../../models/vendor';
import { VendorService } from '../../services/vendor.service';


@Component({
  selector: 'app-vendor-create',
  templateUrl: './vendor-create.component.html',
  styleUrls: ['./vendor-create.component.css']
})
export class VendorCreateComponent implements OnInit {

  pagetitle: string = 'Vendor Create';
  vendor: Vendor = new Vendor(0, '', '', '', '', '', '', '', '', false, true, '', '', '' );

  constructor(
    private VendorSvc: VendorService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  create(): void {
    this.VendorSvc.Create(this.vendor)
    .subscribe(res => {
      console.log(res);
      this.router.navigateByUrl('/vendors/list');
  });
  }

  ngOnInit() {
  }

}





