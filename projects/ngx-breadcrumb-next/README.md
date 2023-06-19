## Versions

| Angular          | ngx-breadcrumb-next |
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
<ngx-breadcrumb-next></ngx-breadcrumb-next>
```

In the routes file we add the breadcrumb callback function to the data:
```js
const routes: Routes = [
  {
    path: 'parent',
    children: [
      {
        path: 'children',
        data: {
          breadcrumb: `Label ngx-breadcrumb-next`,
        }
      }
    ],
  },
  {
    path: 'parent2',
    component: ParentComponent,
    data: {
      breadcrumb: null,
    },
  },
  {
    path: 'parent3/:id',
    component: Parent3Component,
    data: {
      breadcrumb: (data: any) => {
        /* data is number param id */
        return `Label ngx-breadcrumb-next #${data.id}`;
      },
    },
  }
];
```
