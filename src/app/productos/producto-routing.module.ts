import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AgregarComponent } from './pages/agregar/agregar.component';
import { EditarComponent } from './pages/editar/editar.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { NavbarComponent } from './pages/navbar/navbar.component';


const routes: Routes = [
  {
    path:"",
    component:NavbarComponent,
    children:[
      {
        path:"agregar",
        component: AgregarComponent
      },
      {
        path:"listado",
        component: ListadoComponent
      },
      {
        path:"editar/:id",
        component: EditarComponent
      },
      {
        path:"**",
        redirectTo:"listado"
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class ProductoRoutingModule { }
