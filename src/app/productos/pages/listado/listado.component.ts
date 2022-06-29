import { Component, OnInit } from '@angular/core';

import { Producto } from '../../interface/productos.interface';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: [
    
  ]
})
export class ListadoComponent implements OnInit {

  productos: Producto[] = [];

  constructor( private productosServices: ProductosService ) { }

  ngOnInit(): void {
    this.productosServices.getproductos()
      .subscribe( productos => {
        console.log(productos);
        this.productos= [...productos];
      });
  }

  borrarProducto(id:any,iControl:any){
    console.log(id);
    console.log(iControl);
    this.productosServices.deleteProducto(id).subscribe( productos => )
  }

}
