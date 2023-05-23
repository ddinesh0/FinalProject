import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorspaceComponent } from './doctorspace.component';

describe('DoctorspaceComponent', () => {
  let component: DoctorspaceComponent;
  let fixture: ComponentFixture<DoctorspaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoctorspaceComponent]
    });
    fixture = TestBed.createComponent(DoctorspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
