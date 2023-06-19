import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxBreadcrumbNextComponent } from './ngx-breadcrumb-next.component';

@NgModule({
  declarations: [
    NgxBreadcrumbNextComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NgxBreadcrumbNextComponent
  ]
})
export class NgxBreadcrumbNextModule { }
