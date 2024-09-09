import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { timeout } from 'rxjs';

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
  relleno : string = 'outline'
  color : string = 'warning'

    //
    recuerdame = null

  constructor(private router : Router) { }

  ngOnInit() {
    let extras = this.router.getCurrentNavigation()?.extras
    if(extras?.state){
      this.correo = extras.state['correo']
      this.pass = extras.state['pass1']
      this.nombre = extras.state['nombre'],
      this.recuerdame = extras.state['recuerdo']
    }
  }

  boton(){
    if(this.passNueva.length == 0 || this.passAnterior.length == 0){
      this.activo = false
      this.relleno = 'outline'
      this.color = 'warning'
    }else{
      this.activo = true
      this.relleno = 'solid'
      this.color = 'success'
    }
  }

  isToastOpen = false
  mensaje : string = ''

  setOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }

  cambioPass(){
    if(this.pass != this.passAnterior){
      this.isToastOpen = true;
      this.mensaje = 'La contraseña anterior no coincide!'
    }else{
      console.log('yis')
      this.isToastOpen = true;
      this.mensaje = 'Has cambiado la contraseña con exito!'
      setTimeout(() => {
        this.pass = this.passNueva
        this.router.navigate(['contenido'],{
          state : {
            'nombre' : this.nombre,
            'pass1' : this.pass,
            'correo' : this.correo,
            'recuerdo' : this.recuerdame
          }, replaceUrl : true
        })
      }, 1000);
    } 
  }

  volver(){
    this.router.navigate(['contenido'],{
      state : {
        'nombre' : this.nombre,
        'pass1' : this.pass,
        'correo' : this.correo,
        'recuerdo' : this.recuerdame
      }, replaceUrl : true
    }
    )
  }

}
