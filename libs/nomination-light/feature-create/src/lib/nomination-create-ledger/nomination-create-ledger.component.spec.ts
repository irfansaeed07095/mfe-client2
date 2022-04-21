import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NominationCreateLedgerComponent } from './nomination-create-ledger.component';

describe('NominationCreateLedgerComponent', () => {
  let component: NominationCreateLedgerComponent;
  let fixture: ComponentFixture<NominationCreateLedgerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NominationCreateLedgerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NominationCreateLedgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
