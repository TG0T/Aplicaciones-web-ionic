import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-crearusuario',
  templateUrl: './crearusuario.page.html',
  styleUrls: ['./crearusuario.page.scss'],
})
export class CrearusuarioPage implements OnInit {
  /////INPUTS
  mdl_correo : string = ''
  mdl_contrasena : string = ''
  mdl_nombre : string = ''
  mdl_apellido : string = ''
  mdl_carrera : string = ''
  /////LISTA CARRERAS
  items: string[] = ['Ingeniería en Informática', 'Técnico en Redes y Telecomunicaciones', 'Ingeniería en Redes y Telecomunicaciones', 'Analista Programador Computacional','Ingeniería en Desarrollo de Software' ];

  constructor(private router : Router, private api : ApiService) { }

  ngOnInit() {
  }

  async crearUsuario(){
    let data = this.api.crearUsuario(
      this.mdl_correo, this.mdl_contrasena, this.mdl_nombre, this.mdl_apellido, this.mdl_carrera
    )

    let respuesta = await lastValueFrom(data)

    let json_texto = JSON.stringify(respuesta)
    let json = JSON.parse(json_texto)

    if(json.status == 'success'){
      this.isToastOpen = true;
      this.mensaje = 'Usuario Creado correctamente'
      setTimeout(() => {
        this.router.navigate(['login'])
        this.mdl_correo = ''
        this.mdl_contrasena = ''
        this.mdl_nombre = ''
        this.mdl_apellido = ''
        this.mdl_carrera = ''
      }, 2000);
    }else if(json.status == 'error'){
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
