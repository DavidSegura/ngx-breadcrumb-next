import { NgModule } from "@angular/core";
import { MainComponent } from "./views/main/main.component";
import { DetailsComponent } from "./views/details/details.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    {
      path: '',
      component: MainComponent,
      data: {
        breadcrumb: `Main Component`,
      },
      children: [
        {
          path: ":id",
          component: DetailsComponent,
          pathMatch: 'full',
          data: {
            breadcrumb: `Details Component`,
          },
        },
      ],
    }
  ];
  @NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}
  