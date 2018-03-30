import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaserequestReviewlistComponent } from './purchaserequest-reviewlist.component';

describe('PurchaserequestReviewlistComponent', () => {
  let component: PurchaserequestReviewlistComponent;
  let fixture: ComponentFixture<PurchaserequestReviewlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaserequestReviewlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaserequestReviewlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
