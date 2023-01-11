import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      { path: "", pathMatch: 'full', redirectTo: "home" },
      {
        path: "home",
        loadChildren: () =>
          import("../modules/home/home.module").then(
            (m) => m.HomeModule
          ),
      },
      {
        path: "servicos",
        loadChildren: () =>
          import("../modules/servicos/servicos.module").then(
            (m) => m.ServicosModule
          ),
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }