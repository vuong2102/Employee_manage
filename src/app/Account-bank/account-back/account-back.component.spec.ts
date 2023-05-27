import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountBackComponent } from './account-back.component';

describe('AccountBackComponent', () => {
  let component: AccountBackComponent;
  let fixture: ComponentFixture<AccountBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountBackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
