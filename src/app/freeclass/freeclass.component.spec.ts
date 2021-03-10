import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeclassComponent } from './freeclass.component';

describe('FreeclassComponent', () => {
  let component: FreeclassComponent;
  let fixture: ComponentFixture<FreeclassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeclassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
