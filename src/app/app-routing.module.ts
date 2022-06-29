import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './productos/pages/home/home.component';


import { ErrorPageComponent } from './shared/error-page/error-page.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"auth",
    loadChildren: () => import("./auth/auth.module").then(m => m.AuthModule)
  },
  {
    path:"productos",
    loadChildren: () => import("./productos/productos.module").then(m => m.ProductosModule)
  },
  {
    path:"404",
    component: ErrorPageComponent
  },
  {
    path:"**",
    redirectTo: "404"
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
