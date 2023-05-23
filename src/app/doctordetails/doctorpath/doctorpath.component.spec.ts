import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorpathComponent } from './doctorpath.component';

describe('DoctorpathComponent', () => {
  let component: DoctorpathComponent;
  let fixture: ComponentFixture<DoctorpathComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoctorpathComponent]
    });
    fixture = TestBed.createComponent(DoctorpathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
