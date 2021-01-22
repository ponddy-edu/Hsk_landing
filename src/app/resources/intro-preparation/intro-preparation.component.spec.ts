import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroPreparationComponent } from './intro-preparation.component';

describe('IntroPreparationComponent', () => {
  let component: IntroPreparationComponent;
  let fixture: ComponentFixture<IntroPreparationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroPreparationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroPreparationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
