import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  ruta : string = 'https://www.s2-studio.cl/api_duoc/usuario/'
  db : SQLiteObject | null = null
  userlista: any[] = []

  constructor(private http : HttpClient, private sqlite : SQLite, private router : Router) {}

  //API

  login(correo : string, contrasena : string){
    let obj : any = {}

    obj.correo = correo,
    obj.contrasena = contrasena

    return this.http.post(this.ruta + 'usuario_login', obj).pipe()
  }

  crearUsuario(correo : string, contrasena : string, nombre : string, apellido : string, carrera : string){
    let obj : any = {}
    obj.correo = correo,
    obj.contrasena = contrasena,
    obj.nombre = nombre,
    obj.apellido = apellido,
    obj.carrera = carrera

    return this.http.post(this.ruta + 'usuario_almacenar', obj).pipe()
  }

  obtenerSedes(){
    return this.http.get(this.ruta + 'sedes_obtener').pipe()
  }

  cambioContrasena(correo : string, contrasena : string, carrera : string){
    let obj : any = {}
    obj.correo = correo
    obj.contrasena = contrasena
    obj.carrera = carrera
    console.log("VIC: DATOS OK")
    return this.http.patch(this.ruta + 'usuario_modificar', obj).pipe()
  }

  //BD

  async abrirDB(){
    this.db = await this.sqlite.create({
      name: "datos.db",
      location: "default"
    })
    console.log("VIC: BASE DE DATOS OK");
  }

  async tabla(){
    await this.abrirDB()

    this.db?.executeSql("CREATE TABLE IF NOT EXISTS USUARIO (CORREO VARCHAR(50), NOMBRE VARCHAR(50), APELLIDO VARCHAR(50), CARRERA VARCHAR(50), PASS VARCHAR(50))", [])
    console.log('VIC: OK!')
  }

  async almacenar(correo:string,nombre:string,apellido:string,carrera:string,pass:string){
    await this.abrirDB()

    await this.db?.executeSql("INSERT OR REPLACE INTO USUARIO VALUES (?, ?, ?, ?, ?)", [correo, nombre, apellido, carrera, pass])
    console.log('VIC: ALMACENADO!')
  }

  async listar(){
    await this.abrirDB()
    let respuesta = await this.db?.executeSql("SELECT USUARIO.CORREO, USUARIO.NOMBRE, USUARIO.APELLIDO, USUARIO.CARRERA, USUARIO.PASS FROM USUARIO JOIN SESION ON USUARIO.CORREO = SESION.USUARIO WHERE USUARIO.CORREO = SESION.USUARIO", [])

    let obj : any = {}
    obj.correo = await respuesta.rows.item(0).CORREO
    obj.nombre = await respuesta.rows.item(0).NOMBRE
    obj.apellido = await respuesta.rows.item(0).APELLIDO
    obj.carrera = await respuesta.rows.item(0).CARRERA
    obj.pass = await respuesta.rows.item(0).PASS

    return await obj
  }

  //LOGIN BD

  async tablaL(){
    await this.abrirDB()

    this.db?.executeSql("CREATE TABLE IF NOT EXISTS SESION (USUARIO VARCHAR(50))", [])
    console.log('VIC: OK!')
  }

  async guardarSesion(usuario : string){
    await this.db?.executeSql('INSERT OR REPLACE INTO SESION VALUES (?)',[usuario])
  }

  async obtenerSesion(){
    let respuesta = await this.db?.executeSql("SELECT COUNT(USUARIO) AS CANTIDAD FROM SESION", [])
    return JSON.stringify(respuesta.rows.item(0).CANTIDAD)
  }

  async cerrarSesion(){
    await this.db?.executeSql("DELETE FROM SESION", [])
  }

  //CAMBIO CONTRASENA

  async cambioPass(pass : string, carrera : string,  correo : string){
    await this.abrirDB()

    this.db?.executeSql("UPDATE USUARIO SET PASS = (?), CARRERA = (?) WHERE CORREO = (?)", [pass, carrera, correo])
    console.log('VIC: CAMBIO EXITOSO!')
  }
}
