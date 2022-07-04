# Creación de un tema
Configurar primero el tema en el archivo config

::: details Ver el código
```js
themes:
  - name: custom 
```
:::

Cualquier componente debe ser agregado para ser importado al inicio 

::: details Ver el código
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

:::