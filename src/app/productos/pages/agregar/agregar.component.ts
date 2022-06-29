import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";

import { Categoria, Producto } from '../../interface/productos.interface';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent {

  miFormulario: FormGroup = this.fb.group({
    nombre  : [ , [ Validators.required,  ] ],
    categoria : [ ,],
  });

  producto: Producto = {
    id:"",
    name:"",
    categoria: Categoria.Tecnologia,
  }
  
  constructor(private fb: FormBuilder,
              private productosService: ProductosService,
              private router: Router) { }

  guardar(){
    console.log("Me presionaste");
    console.log(this.miFormulario.value);

    this.productosService.addNewProducto( this.miFormulario.value ).subscribe();

    this.router.navigateByUrl("productos/listado");
  }
}
