import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaserequestReviewactionComponent } from './purchaserequest-reviewaction.component';

describe('PurchaserequestReviewactionComponent', () => {
  let component: PurchaserequestReviewactionComponent;
  let fixture: ComponentFixture<PurchaserequestReviewactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaserequestReviewactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaserequestReviewactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
