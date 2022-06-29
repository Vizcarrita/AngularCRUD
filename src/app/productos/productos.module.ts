import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';
import { ProductoRoutingModule } from './producto-routing.module';

import { AgregarComponent } from './pages/agregar/agregar.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { EditarComponent } from './pages/editar/editar.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AgregarComponent,
    ListadoComponent,
    EditarComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ProductoRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProductosModule { }
