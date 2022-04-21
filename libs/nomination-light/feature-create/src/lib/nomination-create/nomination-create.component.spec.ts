import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NominationCreateComponent } from './nomination-create.component';

describe('NominationCreateComponent', () => {
  let component: NominationCreateComponent;
  let fixture: ComponentFixture<NominationCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NominationCreateComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NominationCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
