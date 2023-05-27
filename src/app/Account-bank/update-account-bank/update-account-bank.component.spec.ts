import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAccountBankComponent } from './update-account-bank.component';

describe('UpdateAccountBankComponent', () => {
  let component: UpdateAccountBankComponent;
  let fixture: ComponentFixture<UpdateAccountBankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAccountBankComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateAccountBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
