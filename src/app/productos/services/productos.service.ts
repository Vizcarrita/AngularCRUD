import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../interface/productos.interface';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private readonly API = environment.api;
  constructor( private http: HttpClient ) { }

  addNewProducto(producto: Producto): Observable<Producto>{
    const body = {name: producto};
    return this.http.post<Producto>(this.API, body);
  }
  getproductos(): Observable<Producto[]>{
    return this.http.get<Producto[]>(this.API);
  }
  updateProducto(producto: Producto): Observable<void>{
    const body = {name: producto.name};
    return this.http.put<void>(`${this.API}/${producto.id}`, body);
  }
  deleteProducto(id: string): Observable<void>{
    return this.http.delete<void>(`${this.API}/${id}`);
  }
}
