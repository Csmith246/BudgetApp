import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBudgetsComponent } from './edit-budgets.component';

describe('EditBudgetsComponent', () => {
  let component: EditBudgetsComponent;
  let fixture: ComponentFixture<EditBudgetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBudgetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBudgetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
