import {
  animate,
  state,
  style,
  transition,
  trigger } from '@angular/animations';
import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Input,
  EventEmitter,
  Output,
  OnDestroy,
  OnChanges,
  ElementRef,
  Renderer2 } from '@angular/core';
import {
  Subject,
  BehaviorSubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
// tslint:disable: no-host-metadata-property
// tslint:disable: variable-name

@Component({
  selector: 'mat-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['avatar.component.scss'],
  host: {
    class: 'mat-avatar',
    '[class.mat-avatar--small]': 'size === "small"',
    '[class.mat-avatar--medium]': 'size === "medium"',
    '[class.mat-avatar--large]': 'size === "large"',
    '[class.mat-avatar--primary]': 'color === "primary"',
    '[class.mat-avatar--accent]': 'color === "accent"',
    '[class.mat-avatar--warn]': 'color === "warn"'
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [trigger('imgLoad', [
    state('load', style({opacity: 1})),
    state('unload', style({opacity: 0})),
    transition('unload => load', animate('150ms linear')),
    transition('* => unload', animate('0ms'))
  ])]
})
export class MatAvatarComponent implements OnChanges, OnDestroy {
  @Input() displayName: string;
  @Input() profilImage: string;
  @Input() size: MatAvatarSize = 'medium';
  @Input() color: MatAvatarBorderColor;

  // tslint:disable-next-line: max-line-length
  @Input() paletteColor = ['#5A8770', '#B2B7BB', '#6FA9AB', '#F5AF29', '#0088B9', '#F18636', '#D93A37', '#A6B12E', '#5C9BBC', '#F5888D', '#9A89B5', '#407887', '#9A89B5', '#5A8770', '#D33F33', '#A2B01F', '#F0B126', '#0087BF', '#F18636', '#0087BF', '#B2B7BB', '#72ACAE', '#9C8AB4', '#5A8770', '#EEB424', '#407887'];
  @Output() imageLoadEvent: EventEmitter<MATAvatarLoadEvent> = new EventEmitter<MATAvatarLoadEvent>();

  public initials: string;
  private destroy = new Subject();

  private readonly _imgIsVisible = new BehaviorSubject<boolean>(false);
  public readonly imgIsVisible$ = this._imgIsVisible.asObservable();
  private get imgIsVisible(): boolean {
    return this._imgIsVisible.getValue();
  }
  private set imgIsVisible(value: boolean) {
    this._imgIsVisible.next(value);
  }
  onLoad(value: boolean): void {
    this.imgIsVisible = value;
  }

  constructor(public el: ElementRef, private render: Renderer2) {
    this.imgIsVisible$.pipe(takeUntil(this.destroy)).subscribe(event => {
      event ?
      this.imageLoadEvent.emit({imgIsLoad: true, imgUrl: this.profilImage}) :
      this.imageLoadEvent.emit({imgIsLoad: false, imgUrl: null});
    });
  }

  ngOnChanges(): void {
    if (this.displayName) {
      this.initials = this.createInitials(this.displayName);
      this.createBackground(this.displayName);
    }
  }

  /**
   * Create initials of user
   * @param name Display name
   */
  private createInitials(name: string): string {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  }

  private createBackground(name: string): void {
    const c = name.split(' ').map(n => n[0]).join('').charCodeAt(0);
    let color: string;
    if (c < 65) {
      color = this.getRandomColors();
    } else {
      const colorIndex = Math.floor((c - 65) % this.paletteColor.length);
      color = this.paletteColor[colorIndex];
    }
    this.render.setStyle(this.el.nativeElement, 'backgroundColor', color);
  }

  /**
   * Return random color
   */
  private getRandomColors(): string {
    const letters: string[] = '0123456789ABCDEF'.split('');
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}

export type MatAvatarSize = 'small' | 'medium' | 'large';

export type MatAvatarBorderColor = 'primary' | 'accent' | 'warn';

export interface MATAvatarLoadEvent {
  imgIsLoad: boolean;
  imgUrl: string;
}
