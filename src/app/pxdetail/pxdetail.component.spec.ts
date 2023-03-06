import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PxdetailComponent } from './pxdetail.component';

describe('PxdetailComponent', () => {
  let component: PxdetailComponent;
  let fixture: ComponentFixture<PxdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PxdetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PxdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
