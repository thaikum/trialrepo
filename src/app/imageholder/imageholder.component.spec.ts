import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageholderComponent } from './imageholder.component';

describe('ImageholderComponent', () => {
  let component: ImageholderComponent;
  let fixture: ComponentFixture<ImageholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageholderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
