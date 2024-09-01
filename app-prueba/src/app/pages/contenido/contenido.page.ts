import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.page.html',
  styleUrls: ['./contenido.page.scss'],
})
export class ContenidoPage implements OnInit {

  mdl_usuario : string = ''
  mdl_pass : string = ''

  constructor(private router : Router) { }

  ngOnInit() {
  // al momento de iniciar la pantalla, verificara si existen extras
  let extras = this.router.getCurrentNavigation()?.extras
  if(extras?.state){
    this.mdl_usuario = extras.state['usuario'] // llena el titulo de usuario
    this.mdl_pass = extras.state['pass'] // llena el titulo de pass
  }
  }

  volver(){
    let extras : NavigationExtras = {
      state: {
        'pass' : this.mdl_pass,
        'usuario' : this.mdl_usuario
      }
    }
    this.router.navigate(['login'], extras)
  }

}
