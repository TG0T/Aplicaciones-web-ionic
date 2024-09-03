import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.page.html',
  styleUrls: ['./contenido.page.scss'],
})
export class ContenidoPage implements OnInit {


  mdl_correo: string = ''
  mdl_nombre: string = ''
  mdl_contrasena1: string = ''
  mdl_contrasenanueva: string = ''

  constructor(private router : Router) { }

  ngOnInit() {
  // al momento de iniciar la pantalla, verificara si existen extras
  let extras = this.router.getCurrentNavigation()?.extras
  if(extras?.state){
    this.mdl_correo = extras.state['correo'], // llena el titulo de usuario
    this.mdl_contrasena1 = extras.state['pass1'],
    this.mdl_nombre = extras.state['nombre']
  }
  }

  volver(){
    this.router.navigate(['login'],{
      state : {
        'nombre' : this.mdl_nombre,
        'pass1' : this.mdl_contrasena1,
        'correo' : this.mdl_correo
      }, replaceUrl : true
    }
    )
  }


}
