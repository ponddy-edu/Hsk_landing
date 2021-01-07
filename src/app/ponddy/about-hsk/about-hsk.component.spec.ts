import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutHSKComponent } from './about-hsk.component';

describe('AboutHSKComponent', () => {
  let component: AboutHSKComponent;
  let fixture: ComponentFixture<AboutHSKComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutHSKComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutHSKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
