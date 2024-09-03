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
  mdl_correo: string = 'null' //se evita el login
  mdl_nombre: string = 'null'
  mdl_contrasena1: string = 'null'
  mdl_contrasena2: string = 'null'

  //contraseña actual - predefinida
  mdl_extra: string = 'admin' 

  constructor(private router: Router) { 
  }

  ngOnInit() {
    let extras = this.router.getCurrentNavigation()?.extras
    if(extras?.state){
      this.mdl_correo = extras.state['correo'],
      this.mdl_nombre = extras.state['nombre'],
      this.mdl_contrasena1 = extras.state['pass1'],
      this.mdl_contrasena2 = extras.state['pass2']
    }
    console.log(this.mdl_correo)
    console.log(this.mdl_nombre)
    console.log(this.mdl_contrasena1)
    console.log(this.mdl_contrasena2)
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

  login(){
    if(this.mdl_user == this.mdl_correo && this.mdl_pass == this.mdl_contrasena1){
      this.router.navigate(['contenido'],{
        state : {
          'correo' : this.mdl_correo,
          'nombre' : this.mdl_nombre,
          'pass1' : this.mdl_contrasena1
        }, replaceUrl : true
      }
      )
    }else{
      console.log('nope')
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

}
