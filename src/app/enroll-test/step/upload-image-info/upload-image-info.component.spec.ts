import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadImageInfoComponent } from './upload-image-info.component';

describe('UploadImageInfoComponent', () => {
  let component: UploadImageInfoComponent;
  let fixture: ComponentFixture<UploadImageInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadImageInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadImageInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
