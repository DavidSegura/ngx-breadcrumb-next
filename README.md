## Versions

| Angular          | ng-select |
|------------------|:---------:|
| >=14.0.0 =16.0.0 |   v1.x    |

## Getting started
### Step 1: Install `ngx-breadcrumb-next`:

#### NPM
```shell
npm install --save ngx-breadcrumb-next
```

### Step 2: Import the NgxBreadcrumbNextModule and angular FormsModule module:
```js
import { NgxBreadcrumbNextModule } from 'ngx-breadcrumb-next';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [NgxBreadcrumbNextModule, FormsModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

### Usage
In template use `ngx-breadcrumb-next` component with your options

```html
<!--Using ng-option and for loop-->
<ngx-breadcrumb-next></ngx-breadcrumb-next>
```