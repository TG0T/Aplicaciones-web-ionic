import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router, ROUTER_CONFIGURATION } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

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

  //
  recuerdame = false

  constructor(private router: Router, private api : ApiService) { 
  }

  ngOnInit() {
    let extras = this.router.getCurrentNavigation()?.extras
    if(extras?.state){
      this.mdl_correo = extras.state['correo'],
      this.recuerdame = extras.state['recuerdo']
    }
    if(this.recuerdame == true){
      this.mdl_user = this.mdl_correo
    }else{
      this.mdl_user = ''
    }
    console.log(this.recuerdame)
  }

  async login(){
    let data = this.api.loginUsuario(
      this.mdl_user, this.mdl_pass
    )

    let respuesta = await lastValueFrom(data)

    let json_texto = JSON.stringify(respuesta)
    let json = JSON.parse(json_texto)

    if(json[0].RESPUESTA == 'LOGIN OK'){
      this.router.navigate(['contenido'],{
        state :{
          'correo' : this.mdl_user,
          'recuerdo' : this.recuerdame
        }, replaceUrl : true
      })
    }else{
      this.isToastOpen = true;
      this.mensaje = 'Credenciales incorrectas!'
    }
  }

  isToastOpen = false
  mensaje : string = ''

  setOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }

  crearusuario(){
    this.router.navigate(['crearusuario'])
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
