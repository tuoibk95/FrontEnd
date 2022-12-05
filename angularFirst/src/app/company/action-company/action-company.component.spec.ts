import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionCompanyComponent } from './action-company.component';

describe('ActionCompanyComponent', () => {
  let component: ActionCompanyComponent;
  let fixture: ComponentFixture<ActionCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
