import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartLearnComponent } from './smart-learn.component';

describe('SmartLearnComponent', () => {
  let component: SmartLearnComponent;
  let fixture: ComponentFixture<SmartLearnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartLearnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartLearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
