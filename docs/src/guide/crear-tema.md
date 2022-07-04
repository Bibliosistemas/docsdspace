# Creación de un tema

```js
themes:
  - name: custom 
```

import { Component } from '@angular/core';
import { FooterComponent as BaseComponent } from '../../../../app/footer/footer.component';

Import component 
```js
@Component({
  selector: 'ds-footer',
  styleUrls: ['footer.component.scss'],
  // styleUrls: ['../../../../app/footer/footer.component.scss'],
    templateUrl: 'footer.component.html'
  // templateUrl: '../../../../app/footer/footer.component.html'
})

export class FooterComponent extends BaseComponent {
  showTopFooter = true;
}

```