import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroChineseComponent } from './intro-chinese.component';

describe('IntroChineseComponent', () => {
  let component: IntroChineseComponent;
  let fixture: ComponentFixture<IntroChineseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroChineseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroChineseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
