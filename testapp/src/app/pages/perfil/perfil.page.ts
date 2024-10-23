import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonModal } from '@ionic/angular';
import { lastValueFrom } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  //variables para cambio de carrera
  listaVisible: boolean = false
  cambioCarrera : boolean = false
  carreraAnterior : string = ''
  //almacenamiento de datos
  nombre : string = ''
  apellido : string = ''
  correo : string = ''
  carrera : string = ''
  pass : string = ''
  //items lista
  items: string[] = ['Ingeniería en Informática', 'Técnico en Redes y Telecomunicaciones', 'Ingeniería en Redes y Telecomunicaciones', 
  'Analista Programador Computacional','Ingeniería en Desarrollo de Software' ];
  //inputs
  mdl_pass : string = ''
  mdl_passNueva : string = ''
  constructor(private api : ApiService, private router : Router) { }

  async ngOnInit() {
    await this.api.abrirDB()
    await this.api.tabla()
    let obj = await this.api.listar()
    this.nombre = await obj.nombre
    this.apellido = await obj.apellido
    this.correo = await obj.correo
    this.carreraAnterior = await obj.carrera
    this.pass = await obj.pass
    this.carrera = await obj.carrera
  }

  ionViewWillLeave(){
    this.Limpiar()
  }

  Limpiar() {
    this.pass = ''
    this.mdl_passNueva = ''
    this.cambioCarrera = false
  }
  //funciones para carrera
  visibleLista() {
    this.listaVisible = !this.listaVisible
  }

  carreraPrevia(){
    if(this.carreraAnterior !== this.carrera){
      this.cambioCarrera = true
      this.visibleLista()
    }else{
      this.cambioCarrera = false
      this.visibleLista()
    }
  }
  //funciones cambio contraseña

  async cambioPass(){
    this.api.cambioPass(this.mdl_passNueva, this.carrera,this.correo)
  }

  async cambioPassword(){

    if(this.mdl_pass == this.pass){

      let data = this.api.cambioContrasena(
        this.correo, this.mdl_passNueva, this.carrera
      )
  
      let respuesta = await lastValueFrom(data)
  
      let json_texto = JSON.stringify(respuesta)
      let json = JSON.parse(json_texto)

      if(json.status == 'success'){
        await this.cambioPass()
        this.isToastOpen = true;
        this.mensaje = json.message
        setTimeout(() => {
          this.router.navigate(['principal'])
        }, 2000);
      }else if(json.status = "error"){
        this.isToastOpen = true;
        this.mensaje = json.message
      }
    }else{
      this.isToastOpen = true;
      this.mensaje = 'Contraseña Actual Incorrecta'
    }
  }


  //toast
  isToastOpen: boolean = false
  mensaje: string = ''

  setOpen(isOpen: boolean) {
    this.isToastOpen = isOpen
  }

}
