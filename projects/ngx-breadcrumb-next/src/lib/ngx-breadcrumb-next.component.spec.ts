import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxBreadcrumbNextComponent } from './ngx-breadcrumb-next.component';

describe('NgxBreadcrumbNextComponent', () => {
  let component: NgxBreadcrumbNextComponent;
  let fixture: ComponentFixture<NgxBreadcrumbNextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxBreadcrumbNextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxBreadcrumbNextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
