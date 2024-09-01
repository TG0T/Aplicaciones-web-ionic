import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contrasena',
  templateUrl: './contrasena.page.html',
  styleUrls: ['./contrasena.page.scss'],
})
export class ContrasenaPage implements OnInit {
  
  passActual: string = '' // contraseña actual (predefinida o cambiada)
  nuevaPass: string = '' // contraseña que reemplazara a la actual

  constructor(private router: Router) { }

  ngOnInit() {
    let extras = this.router.getCurrentNavigation()?.extras
    if(extras?.state){
      this.passActual = extras.state['mdl_extra'] //trae la contraseña actual desde el login
      console.log(this.passActual) //muestra la contraseña actual en la consola
    }
  }

  cambio(){
    if(this.nuevaPass == ''){
      console.log('nope') //evita ingresos vacios / nulos
    }else{
      this.router.navigate(['login'], //redirige a la pantalla login
        {state: { "nuevo" : this.nuevaPass} //llevamos especificamente la nueva contraseña a la pantalla de login (similar a extra pero mas "directo")
        ,replaceUrl : true}) //limpia el historial, obligatorio si se hace el cambio de contraseña
    }
  }

}
