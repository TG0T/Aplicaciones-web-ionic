import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  //inputs desde la pantalla/pagina
  mdl_user: string = ''
  mdl_pass: string = ''

  // datos desde crear usuario
  mdl_correo: string = ''
  mdl_nombre: string = ''
  mdl_contrasena1: string = ''
  mdl_contrasena2: string = ''

  //contraseña actual - predefinida
  mdl_extra: string = 'admin' 

  //
  recuerdame = false

  constructor(private router: Router) { 
  }

  ngOnInit() {
    let extras = this.router.getCurrentNavigation()?.extras
    if(extras?.state){
      this.mdl_correo = extras.state['correo'],
      this.mdl_nombre = extras.state['nombre'],
      this.mdl_contrasena1 = extras.state['pass1'],
      this.mdl_contrasena2 = extras.state['pass2'],
      this.recuerdame = extras.state['recuerdo']
    }
    if(this.recuerdame == true){
      this.mdl_user = this.mdl_correo
    }else{
      this.mdl_user = ''
    }
    console.log(this.mdl_correo)
    console.log(this.mdl_nombre)
    console.log(this.mdl_contrasena1)
    console.log(this.mdl_contrasena2),
    console.log(this.recuerdame)
  }

  contrasena(){
    // redirige a la pantalla contraseña llevandose consigo el dato de la contraseña actual (mdl_extra)
    let extras : NavigationExtras = {
      state :{
        'mdl_extra' : this.mdl_extra // se lleva la contraseña actual a la pagina de cambio de contraseña
      },
      replaceUrl : true //limpia el historial, obligatorio si se hace el cambio de contraseña
    }
    this.router.navigate(['contrasena'], extras) //redirige a la pantalla/pagina contraseña
  }

  isToastOpen = false
  mensaje : string = ''

  setOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }

  login(){
    if(this.mdl_user == this.mdl_correo && this.mdl_pass == this.mdl_contrasena1){
      this.router.navigate(['contenido'],{
        state : {
          'correo' : this.mdl_correo,
          'nombre' : this.mdl_nombre,
          'pass1' : this.mdl_contrasena1,
          'recuerdo' : this.recuerdame
        }, replaceUrl : true
      }
    )
    }else{
      this.isToastOpen = true;
      this.mensaje = 'Credenciales incorrectas!'
    }
  }

  crearusuario(){
    let extras : NavigationExtras = {
      state : {
        'nombre' : this.mdl_nombre,
        'correo' : this.mdl_correo,
        'p1' : this.mdl_contrasena1,
        'p2' : this.mdl_contrasena2
      }, replaceUrl : true
    }
    this.router.navigate(['crearusuario'], extras)
  }

  //boton login
  activo = false
  relleno : string = 'outline'

  boton(){
    if(this.mdl_user == '' || this.mdl_pass == ''){
      this.activo = false
      this.relleno = 'outline'
    }else{
      this.activo = true
      this.relleno = 'solid'
    }
  }


}
