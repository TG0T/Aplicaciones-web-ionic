import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-crearusuario',
  templateUrl: './crearusuario.page.html',
  styleUrls: ['./crearusuario.page.scss'],
})
export class CrearusuarioPage implements OnInit {

  constructor(private router: Router, private toastController: ToastController) { }

  ngOnInit() {
  }

  mdl_correo: string = ''
  mdl_nombre: string = ''
  mdl_contrasena1: string = ''
  mdl_contrasena2: string = ''

  isToastOpen = false
  mensaje : string = ''

  setOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }

  crearcuenta(){
    if(this.mdl_contrasena1 == this.mdl_contrasena2){
      this.router.navigate(['login'],
        {state : {
          'nombre' : this.mdl_nombre,
          'correo' : this.mdl_correo,
          'pass1' : this.mdl_contrasena1,
          'pass2' : this.mdl_contrasena2
        }, replaceUrl : true}
      )
    }else{
      this.isToastOpen = true;
      this.mensaje = 'Las contraseñas no coinciden!'
    }
  }

  activo = false
  relleno : string = 'outline'

  boton(){
    if(this.mdl_correo == '' || this.mdl_nombre == '' || this.mdl_contrasena1 == '' || this.mdl_contrasena2 == ''){
      this.activo = false
      this.relleno = 'outline'
    }else{
      this.activo = true
      this.relleno = 'solid'
    }
  }
  

}
