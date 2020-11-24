import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatBannerComponent } from './banner.component';
import { MatBannerActionsComponent, MatBannerPrimaryActionDirective, MatBannerSecondaryActionDirective } from './banner-actions/banner-actions.component';
import { MatBannerGraphicDirective, MatBannerGraphicTextWrapperComponent, MatBannerTextDirective } from './banner-graphic-text-wrapper/banner-graphic-text-wrapper.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    MatBannerComponent,
    MatBannerActionsComponent,
    MatBannerGraphicTextWrapperComponent,
    MatBannerGraphicDirective,
    MatBannerTextDirective,
    MatBannerPrimaryActionDirective,
    MatBannerSecondaryActionDirective
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    MatBannerComponent,
    MatBannerGraphicTextWrapperComponent,
    MatBannerActionsComponent,
    MatBannerGraphicDirective,
    MatBannerTextDirective,
    MatBannerPrimaryActionDirective,
    MatBannerSecondaryActionDirective
  ]
})
export class MatBannerModule { }
