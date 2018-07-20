import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeInputterComponent } from './income-inputter.component';

describe('IncomeInputterComponent', () => {
  let component: IncomeInputterComponent;
  let fixture: ComponentFixture<IncomeInputterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncomeInputterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomeInputterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
