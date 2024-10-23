import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  ruta : string = 'https://programadormaldito.cl'

  constructor(private http : HttpClient) { }

  crearUsuario(correo : string, contrasena : string, nombre : string, apellido : string){
    let obj : any = {}
    obj.mail = correo
    obj.pass = contrasena
    obj.nombre = nombre
    obj.apellido = apellido
    return this.http.post(this.ruta + '/route/usuario_duoc_almacenar', obj).pipe()
  }
  
  loginUsuario(correo : string, contrasena : string){
    let obj : any = {}
    obj.mail = correo
    obj.pass = contrasena
    return this.http.post(this.ruta + '/route/usuario_duoc_login', obj).pipe()
  }

  ingresarProducto(codigo : string, nombre : string, descripcion : string, precio : string, mail : string){
    let obj : any = {}
    obj.codigo = codigo
    obj.nombre = nombre
    obj.descripcion = descripcion
    obj.precio = precio
    obj.mail = mail
    return this.http.post(this.ruta + '/route/producto_duoc_almacenar', obj).pipe()
  }

  listarProducto(){
    return this.http.get(this.ruta + '/route/producto_duoc_obtener')
  }
}
