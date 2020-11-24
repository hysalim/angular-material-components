# AVATAR
If the profile picture is not available, the avatar calculates the background color based on the person's initials. Once the image is loaded, the avatar displays the image.
## Get starting
### TypeScript
In your application module
```typescript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatAvatarModule } from '@hysalim/material-components';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatAvatarModule
  ]
})
export class AppModule { }
```
### SCSS
In your stylesheet
```scss
@use "@hysalim/material-components/theme/avatar";
@use "@angular/material/theming";

// Material angular implementation theme
@include theming.mat-core();

$primary: theming.mat-palette($mat-indigo);
$accent: theming.mat-palette($mat-pink, A200, A100, A400);
$warn: theming.mat-palette($mat-red);

$theme: theming.mat-light-theme((
  color: (
    primary: $primary,
    accent: $accent,
    warn: $warn
  )
));
@include theming.angular-material-theming($theme);

// Avatar implementation theme
@include avatar.avatar-theme($theme);

```
### HTML
In your html file
```html
<mat-avatar displayName="Marie Rubeillon"
  profilAvatar="./assets/marie-rubeillon.jpg"></mat-avatar>
```
|Keys name|Description|
|---------|-----------|
|`@Input() displayName: string`|Username. Creates the user's initials and calculates the avatar's background color the time of loading or if there is no image|
|`@Input() profilImage: string`|URL image profil|
|`@Input() size: Size`|size of avatar `small`, `medium` , `large`|
|`@input() color: string`|Border color `primary`, `accent`, `warn`|
|`@Input() paletteColor: string[]`|Customize palette colors|
|`@Output() imageLoadEvent: EventEmitter<MATAvatarLoadEvent>`|Return object when imageLoadEvent is emitted `{imgIsLoad: boolean, imgUrl: string}`|
## Mixins
|Mixins|Description|
|------|-----------|
|`small-size($size)`|Set size of small avatar (default: 40px)|
|`medium-size($size)`|Set size of medium avatar (default: 60px)|
|`large-size($size)`|Set size of large avatar (default: 90px)|
|`border-radius($radius)`|Set radius of avatar (default: 50%)|
|`elevation($elevation, $hover: null)`|Set elevation of avatar. If hover is `true`, set elevation of avatar `:hover`|

```scss
// Example
.mat-avatar {
  @include avatar.small-size(30px);
  @include avatar.border-radius(4px);
}
```
