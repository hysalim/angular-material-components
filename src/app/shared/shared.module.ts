import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import {
  MatAvatarModule,
  MatBannerModule
} from '@hysalim/material-components';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatAvatarModule,
    MatBannerModule,
    MaterialModule
  ],
  exports: [
    CommonModule,
    MatAvatarModule,
    MatBannerModule,
    MaterialModule
  ]
})
export class SharedModule { }
