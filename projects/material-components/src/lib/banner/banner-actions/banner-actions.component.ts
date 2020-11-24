import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, Directive, Input } from '@angular/core';
// tslint:disable: no-host-metadata-property

@Directive({
  selector: '[matBannerPrimaryAction], mat-banner-primary-action',
  host: {
    class: 'mat-banner__primary-action'
  }
})
export class MatBannerPrimaryActionDirective {}

@Directive({
  selector: '[matBannerSecondaryAction], mat-banner-secondary-action',
  host: {
    class: 'mat-banner__secondary-action'
  }
})
export class MatBannerSecondaryActionDirective {}

@Component({
  selector: 'mat-banner-actions',
  templateUrl: './banner-actions.component.html',
  host: {
    class: 'mat-banner__actions'
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatBannerActionsComponent {
  @Input() primaryLabel: string;
  @Input() secondaryLabel: string;
}
