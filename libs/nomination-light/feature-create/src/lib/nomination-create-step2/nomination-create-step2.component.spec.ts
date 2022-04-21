import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NominationCreateStep2Component } from './nomination-create-step2.component';

describe('NominationCreateStep2Component', () => {
  let component: NominationCreateStep2Component;
  let fixture: ComponentFixture<NominationCreateStep2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NominationCreateStep2Component],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NominationCreateStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
