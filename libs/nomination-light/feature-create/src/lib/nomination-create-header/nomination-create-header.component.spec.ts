import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NominationCreateHeaderComponent } from './nomination-create-header.component';

describe('NominationCreateHeaderComponent', () => {
  let component: NominationCreateHeaderComponent;
  let fixture: ComponentFixture<NominationCreateHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NominationCreateHeaderComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NominationCreateHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
