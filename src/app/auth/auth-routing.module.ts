import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { HomeComponent } from '../productos/pages/home/home.component';

const routes: Routes = [
  {
    path:"",
    children:[
      {
        path:"login",
        component:LoginComponent
      },
      {
        path:"registro",
        component:RegistroComponent
      },
      {
        path:"**",
        component: HomeComponent
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild( routes )
  ],
  exports:[
    RouterModule
  ]
})
export class AuthRoutingModule { }
