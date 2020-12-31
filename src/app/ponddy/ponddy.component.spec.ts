import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PonddyComponent } from './ponddy.component';

describe('PonddyComponent', () => {
  let component: PonddyComponent;
  let fixture: ComponentFixture<PonddyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PonddyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PonddyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
