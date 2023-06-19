import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { NgxBreadcrumbNextService } from './ngx-breadcrumb-next.service';
import { IBreadcrumb } from './ngx-breadcrumb-next.interface';

@Component({
  selector: 'ngx-breadcrumb-next',
  templateUrl: './ngx-breadcrumb-next.component.html',
  styleUrls: ['./ngx-breadcrumb-next.component.css']
})
export class NgxBreadcrumbNextComponent {
  breadcrumbs$: Observable<IBreadcrumb[]>;

  constructor(private readonly breadcrumbService: NgxBreadcrumbNextService) {
    this.breadcrumbs$ = this.breadcrumbService.breadcumbs$;
  }
}
