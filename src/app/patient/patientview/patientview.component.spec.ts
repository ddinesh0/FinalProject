import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientviewComponent } from './patientview.component';

describe('PatientviewComponent', () => {
  let component: PatientviewComponent;
  let fixture: ComponentFixture<PatientviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatientviewComponent]
    });
    fixture = TestBed.createComponent(PatientviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
