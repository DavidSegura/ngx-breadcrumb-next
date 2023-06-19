import { TestBed } from '@angular/core/testing';

import { NgxBreadcrumbNextService } from './ngx-breadcrumb-next.service';

describe('NgxBreadcrumbNextService', () => {
  let service: NgxBreadcrumbNextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxBreadcrumbNextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
