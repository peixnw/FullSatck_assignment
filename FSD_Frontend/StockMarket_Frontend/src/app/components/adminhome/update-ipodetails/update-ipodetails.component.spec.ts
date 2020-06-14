import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateIpodetailsComponent } from './update-ipodetails.component';

describe('UpdateIpodetailsComponent', () => {
  let component: UpdateIpodetailsComponent;
  let fixture: ComponentFixture<UpdateIpodetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateIpodetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateIpodetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
