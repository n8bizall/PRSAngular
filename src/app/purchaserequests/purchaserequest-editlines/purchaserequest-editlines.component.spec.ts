import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaserequestEditlinesComponent } from './purchaserequest-editlines.component';

describe('PurchaserequestEditlinesComponent', () => {
  let component: PurchaserequestEditlinesComponent;
  let fixture: ComponentFixture<PurchaserequestEditlinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaserequestEditlinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaserequestEditlinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
