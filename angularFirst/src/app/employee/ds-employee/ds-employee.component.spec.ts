import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsEmployeeComponent } from './ds-employee.component';

describe('DsEmployeeComponent', () => {
  let component: DsEmployeeComponent;
  let fixture: ComponentFixture<DsEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DsEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DsEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
