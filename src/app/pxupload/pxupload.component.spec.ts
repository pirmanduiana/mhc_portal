import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PxuploadComponent } from './pxupload.component';

describe('PxuploadComponent', () => {
  let component: PxuploadComponent;
  let fixture: ComponentFixture<PxuploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PxuploadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PxuploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
