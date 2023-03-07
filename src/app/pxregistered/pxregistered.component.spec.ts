import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PxregisteredComponent } from './pxregistered.component';

describe('PxregisteredComponent', () => {
  let component: PxregisteredComponent;
  let fixture: ComponentFixture<PxregisteredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PxregisteredComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PxregisteredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
