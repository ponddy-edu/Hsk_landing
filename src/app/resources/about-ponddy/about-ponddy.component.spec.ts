import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPonddyComponent } from './about-ponddy.component';

describe('AboutPonddyComponent', () => {
  let component: AboutPonddyComponent;
  let fixture: ComponentFixture<AboutPonddyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutPonddyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutPonddyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
