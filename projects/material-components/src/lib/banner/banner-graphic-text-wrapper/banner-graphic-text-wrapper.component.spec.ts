import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerGraphicTextWrapperComponent } from './banner-graphic-text-wrapper.component';

describe('BannerGraphicTextWrapperComponent', () => {
  let component: BannerGraphicTextWrapperComponent;
  let fixture: ComponentFixture<BannerGraphicTextWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerGraphicTextWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerGraphicTextWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
