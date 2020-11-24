import { Component, ViewEncapsulation, ChangeDetectionStrategy, Directive, Input } from '@angular/core';
// tslint:disable: no-host-metadata-property

@Directive({
  selector: '[matBannerGraphic]',
  host: {
    class: 'mat-banner__graphic',
    role: 'img',
    alt: ''
  }
})
export class MatBannerGraphicDirective {}

@Directive({
  selector: '[matBannerText]',
  host: {
    class: 'mat-banner__text'
  }
})
export class MatBannerTextDirective {}

@Component({
  selector: 'mat-banner-graphic-text-wrapper',
  templateUrl: './banner-graphic-text-wrapper.component.html',
  host: {
    class: 'mat-banner__graphic-text-wrapper'
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatBannerGraphicTextWrapperComponent {
  @Input() icon: string;
  @Input() message: string;
}
