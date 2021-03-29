import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroCourseComponent } from './intro-course.component';

describe('IntroCourseComponent', () => {
  let component: IntroCourseComponent;
  let fixture: ComponentFixture<IntroCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
