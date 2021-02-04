import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroSmartComponent } from './intro-smart.component';

describe('IntroSmartComponent', () => {
  let component: IntroSmartComponent;
  let fixture: ComponentFixture<IntroSmartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroSmartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
