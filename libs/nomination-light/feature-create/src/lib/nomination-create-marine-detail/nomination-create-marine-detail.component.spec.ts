import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NominationCreateMarineDetailComponent } from './nomination-create-marine-detail.component';

describe('NominationCreateMarineDetailComponent', () => {
  let component: NominationCreateMarineDetailComponent;
  let fixture: ComponentFixture<NominationCreateMarineDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NominationCreateMarineDetailComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NominationCreateMarineDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
