import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocpofileComponent } from './docpofile.component';

describe('DocpofileComponent', () => {
  let component: DocpofileComponent;
  let fixture: ComponentFixture<DocpofileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DocpofileComponent]
    });
    fixture = TestBed.createComponent(DocpofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
