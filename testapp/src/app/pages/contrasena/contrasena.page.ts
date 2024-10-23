import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-contrasena',
  templateUrl: './contrasena.page.html',
  styleUrls: ['./contrasena.page.scss'],
})
export class ContrasenaPage implements OnInit {
  /////INPUTS
  mdl_correo : string = ''
  mdl_contrasena : string = ''
  mdl_carrera : string = ''
  /////LISTA CARRERAS
  items: string[] = ['Ingeniería en Informática', 'Técnico en Redes y Telecomunicaciones', 'Ingeniería en Redes y Telecomunicaciones', 'Analista Programador Computacional','Ingeniería en Desarrollo de Software' ];

  constructor(private api : ApiService, private router : Router) { }

  ngOnInit() {
  }

  ionViewWillLeave(){
    this.Limpiar()
  }

  Limpiar() {
    this.mdl_correo = ''
    this.mdl_contrasena = ''
    this.mdl_carrera = ''
  }

  async cambioPass(){
    this.api.cambioPass(this.mdl_contrasena, this.mdl_carrera,this.mdl_correo)
  }


  async recuperarPass(){
    let data = this.api.cambioContrasena(
      this.mdl_correo, this.mdl_contrasena, this.mdl_carrera
    )

    let respuesta = await lastValueFrom(data)

    let json_texto = JSON.stringify(respuesta)
    let json = JSON.parse(json_texto)

    if(json.status == 'success'){
    await this.cambioPass()
    this.isToastOpen = true;
    this.mensaje = json.message
    setTimeout(() => {
      this.router.navigate(['login'])
    }, 2000);
    }else if(json.status = "error"){
      this.isToastOpen = true;
      this.mensaje = json.message
    }

  }

    //toast
    isToastOpen = false
    mensaje : string = ''
  
    setOpen(isOpen: boolean) {
      this.isToastOpen = isOpen;
    }

}
