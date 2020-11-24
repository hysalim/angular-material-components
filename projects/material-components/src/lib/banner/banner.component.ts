import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, ViewChild, ElementRef, Output, EventEmitter, Input, HostListener } from '@angular/core';
// tslint:disable: no-host-metadata-property
// tslint:disable: variable-name

@Component({
  selector: 'mat-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['banner.component.scss'],
  host: {
    class: 'mat-banner mat-banner--centered',
    role: 'banner'
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatBannerComponent implements OnInit {
  @ViewChild('contentEl', {static: true}) contentEl: ElementRef<HTMLElement>;
  @Output() openEvent: EventEmitter<void> = new EventEmitter<void>();
  @Output() closeEvent: EventEmitter<void> = new EventEmitter<void>();

  @Input() get isOpen(): boolean {
    return this._isOpen;
  }
  set isOpen(value: boolean) {
    const open = coerceBooleanProperty(value);
    open ? this.open() : this.close();
    this._isOpen = open;
  }
  private _isOpen = false;

  @Input() get fixed(): boolean {
    return this._fixed;
  }
  set fixed(value: boolean) {
    this._fixed = coerceBooleanProperty(value);
  }
  private _fixed = false;

  constructor(public el: ElementRef<HTMLElement>) { }

  ngOnInit(): void {
  }

  open(): void {}

  close(): void {}

  @HostListener('window:resize')
  layout(): void {}
}
