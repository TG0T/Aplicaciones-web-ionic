import { compileDeferResolverFunction } from '@angular/compiler';
import { Component, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { IonModal } from '@ionic/angular';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.page.html',
  styleUrls: ['./contenido.page.scss'],
})
export class ContenidoPage implements OnInit {

  @ViewChild(IonModal) modal!: IonModal;

  mdl_correo: string = ''
  mdl_nombre: string = ''
  mdl_contrasena1: string = ''
  mdl_contrasenanueva: string = ''

  //inputs modal
  pass1: string = ''
  pass2: string = ''

  //
  recuerdame = null

  constructor(private router : Router) { }

  ngOnInit() {
  // al momento de iniciar la pantalla, verificara si existen extras
  let extras = this.router.getCurrentNavigation()?.extras
  if(extras?.state){
    this.mdl_correo = extras.state['correo'], // llena el titulo de usuario
    this.mdl_contrasena1 = extras.state['pass1'],
    this.mdl_nombre = extras.state['nombre'],
    this.recuerdame = extras.state['recuerdo']
  }
  console.log('Correo: '+this.mdl_correo + ' Recordar?: ' + this.recuerdame)
  }

  volver(){
    this.router.navigate(['login'],{
      state : {
        'nombre' : this.mdl_nombre,
        'pass1' : this.mdl_contrasena1,
        'correo' : this.mdl_correo,
        'recuerdo' : this.recuerdame
      }, replaceUrl : true
    }
    )
    this.modal.dismiss();
  }

  perfil(){
    this.router.navigate(['perfil'],{
      state : {
        'nombre' : this.mdl_nombre,
        'pass1' : this.mdl_contrasena1,
        'correo' : this.mdl_correo,
        'recuerdo' : this.recuerdame
      }, replaceUrl : true
    })
  }

  dismissModal() {
    this.modal.dismiss();
  }

  listarCorreo(){
    this.router.navigate(['listarproductoxcorreo'],{
      state :{
        'correo' : this.mdl_correo,
        'recuerdo' : this.recuerdame
      }, replaceUrl : true
    }
    )
  }
  listarTodos(){
    this.router.navigate(['listarproducto'],{
      state :{
        'correo' : this.mdl_correo,
        'recuerdo' : this.recuerdame
      }, replaceUrl : true
    }
    )
  }
  ingresarProducto(){
    this.router.navigate(['ingresarproducto'],{
      state :{
        'correo' : this.mdl_correo,
        'recuerdo' : this.recuerdame
      }, replaceUrl : true
    }
    )
  }
}
