import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  //datos transportados
  correo : string = ''
  pass : string = ''
  nombre : string = ''

  //inputs
  passAnterior : string = ''
  passNueva : string = ''

  //boton
  activo = false

  constructor(private router : Router) { }

  ngOnInit() {
    let extras = this.router.getCurrentNavigation()?.extras
    if(extras?.state){
      this.correo = extras.state['correo']
      this.pass = extras.state['pass1']
      this.nombre = extras.state['nombre']
    }
  }

  boton(){
    if(this.passNueva.length == 0 && this.passAnterior.length == 0){
      this.activo = false
    }else{
      this.activo = true
    }
  }

  cambioPass(){
    if(this.pass != this.passAnterior){
      console.log('nope')
    }else{
      console.log('yis')
      this.pass = this.passNueva
      this.router.navigate(['contenido'],{
        state : {
          'nombre' : this.nombre,
          'pass1' : this.pass,
          'correo' : this.correo
        }, replaceUrl : true
      })
    } 
  }

}
