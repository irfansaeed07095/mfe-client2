import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NominationCreateStep1Component } from './nomination-create-step1.component';

describe('NominationCreateStep1Component', () => {
  let component: NominationCreateStep1Component;
  let fixture: ComponentFixture<NominationCreateStep1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NominationCreateStep1Component],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NominationCreateStep1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
