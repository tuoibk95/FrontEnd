import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsCompanyComponent } from './ds-company.component';

describe('DsCompanyComponent', () => {
  let component: DsCompanyComponent;
  let fixture: ComponentFixture<DsCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DsCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DsCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
