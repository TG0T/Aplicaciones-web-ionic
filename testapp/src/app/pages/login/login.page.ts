import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { lastValueFrom } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  mdl_correo : string = ''
  mdl_contrasena : string = ''
  //////
  correo : string = ''
  nombre : string = ''
  apellido : string = ''
  carrera : string = ''

  constructor(private router : Router, private api : ApiService, private platform : Platform) { }

  async ngOnInit() {
    await this.api.abrirDB()
    await this.api.tabla()
    await this.api.tablaL()
  }

  ionViewWillEnter(){
    this.Limpiar()
    this.platform.backButton.subscribeWithPriority(10, () => {});
  }

  Limpiar() {
    this.mdl_correo = ''
    this.mdl_contrasena = ''
  }

  async loginUsuario(){
    let data = this.api.login(
      this.mdl_correo, this.mdl_contrasena
    )

    let respuesta = await lastValueFrom(data)

    let json_texto = JSON.stringify(respuesta)
    let json = JSON.parse(json_texto)

    if(json.status == 'success'){
      this.router.navigate(['principal'])
      this.correo = json.usuario.correo
      this.nombre = json.usuario.nombre
      this.apellido = json.usuario.apellido
      this.carrera = json.usuario.carrera
      await this.almacenar()
      await this.sesion()
    }else if(json.status == 'error'){
      this.isToastOpen = true;
      this.mensaje = json.message
    }    
  }

  async almacenar(){
    this.api.almacenar(this.correo,this.nombre,this.apellido,this.carrera,this.mdl_contrasena)
  }

  async sesion(){
    this.api.guardarSesion(this.correo)
  }

  crearUsuario(){
    this.router.navigate(['crearusuario'])
  }

  contrasena(){
    this.router.navigate(['contrasena'])
  }

  //toast
  isToastOpen = false
  mensaje : string = ''

  setOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }

}
