import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NominationCreateSecuredSectionComponent } from './nomination-create-secured-section.component';

describe('NominationCreateSecuredSectionComponent', () => {
  let component: NominationCreateSecuredSectionComponent;
  let fixture: ComponentFixture<NominationCreateSecuredSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NominationCreateSecuredSectionComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NominationCreateSecuredSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
