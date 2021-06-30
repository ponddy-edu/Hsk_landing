import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroEnrollComponent } from './intro-enroll.component';

describe('IntroEnrollComponent', () => {
  let component: IntroEnrollComponent;
  let fixture: ComponentFixture<IntroEnrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroEnrollComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroEnrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
