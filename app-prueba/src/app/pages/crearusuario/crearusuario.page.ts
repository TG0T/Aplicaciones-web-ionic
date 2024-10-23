import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { lastValueFrom } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-crearusuario',
  templateUrl: './crearusuario.page.html',
  styleUrls: ['./crearusuario.page.scss'],
})
export class CrearusuarioPage implements OnInit {

  constructor(private router: Router, private toastController: ToastController, private api : ApiService) { }

  ngOnInit() {
  }

  mdl_correo: string = ''
  mdl_nombre: string = ''
  mdl_apellido: string = ''
  mdl_contrasena: string = ''

  isToastOpen = false
  mensaje : string = ''

  setOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }

  async crearUsuario(){
    let data = this.api.crearUsuario(
      this.mdl_correo, this.mdl_contrasena, this.mdl_nombre, this.mdl_apellido
    )

    let respuesta = await lastValueFrom(data)

    let json_texto = JSON.stringify(respuesta)
    let json = JSON.parse(json_texto)

    if(json[0].RESPUESTA == 'OK'){
      this.router.navigate(['login'])
    }else{
      this.isToastOpen = true;
      this.mensaje = 'Las contraseñas no coinciden!'
      console.log('a')
    }

  }

  activo = false
  relleno : string = 'outline'

  boton(){
    if(this.mdl_correo == '' || this.mdl_nombre == '' || this.mdl_apellido == '' || this.mdl_contrasena == ''){
      this.activo = false
      this.relleno = 'outline'
    }else{
      this.activo = true
      this.relleno = 'solid'
    }
  }
  

}
