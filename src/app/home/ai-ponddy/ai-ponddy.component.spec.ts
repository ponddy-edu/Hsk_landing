import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiPonddyComponent } from './ai-ponddy.component';

describe('AiPonddyComponent', () => {
  let component: AiPonddyComponent;
  let fixture: ComponentFixture<AiPonddyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AiPonddyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AiPonddyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
