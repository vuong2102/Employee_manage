import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAccountBankComponent } from './create-account-bank.component';

describe('CreateAccountBankComponent', () => {
  let component: CreateAccountBankComponent;
  let fixture: ComponentFixture<CreateAccountBankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAccountBankComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateAccountBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
