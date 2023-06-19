import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { MainComponent } from './views/main/main.component';
import { DetailsComponent } from './views/details/details.component';

import { AppRoutingModule } from "./app.routing";
import { NgxBreadcrumbNextModule } from "../../projects/ngx-breadcrumb-next/src/public-api";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    NgxBreadcrumbNextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
