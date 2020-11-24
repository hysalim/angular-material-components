import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatAvatarComponent } from './avatar.component';



@NgModule({
  declarations: [MatAvatarComponent],
  imports: [
    CommonModule
  ],
  exports: [MatAvatarComponent]
})
export class MatAvatarModule { }
