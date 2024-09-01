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

  //contraseña actual - predefinida
  mdl_extra: string = 'admin' 

  constructor(private router: Router) { 
  }

  ngOnInit() {
    // al momento de iniciar la pantalla, verificara si existen extras
    let extras = this.router.getCurrentNavigation()?.extras
    if(extras?.state){
      this.mdl_extra = extras.state['nuevo'] // en caso de existir, reemplazara mld_extra por el dato trasladado desde la pagina "contraseña"
    }
    console.log(this.mdl_extra) // muestra la contraseña actual (predefinida o cambiada)
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
    //if basico, la diferencia es que usamos mdl_extra para la contraseña en vez de tenerlo fijo en el if (si esta fijo, es imposible cambiarlo)
    if(this.mdl_user == 'admin' && this.mdl_pass == this.mdl_extra){ //se hace la comparacion entre mdl_pass y mdl_extra
      let extras : NavigationExtras = {
        state : {
          'usuario' : this.mdl_user, //se lleva los datos de usuario obtenidos desde el input
          'pass' : this.mdl_extra // se puede utilizar el input de pass, pero preferi utilizar el de la contraseña almacenada
        }
      }
    this.router.navigate(['contenido'], extras) //nos llevamos los datos a la pagina principal aka contenido
    }
  }

}
