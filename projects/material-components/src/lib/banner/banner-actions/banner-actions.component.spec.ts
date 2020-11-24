import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerActionsComponent } from './banner-actions.component';

describe('BannerActionsComponent', () => {
  let component: BannerActionsComponent;
  let fixture: ComponentFixture<BannerActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
