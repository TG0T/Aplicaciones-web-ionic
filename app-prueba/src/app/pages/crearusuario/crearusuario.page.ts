import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-crearusuario',
  templateUrl: './crearusuario.page.html',
  styleUrls: ['./crearusuario.page.scss'],
})
export class CrearusuarioPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  mdl_correo: string = ''
  mdl_nombre: string = ''
  mdl_contrasena1: string = ''
  mdl_contrasena2: string = ''

  crearcuenta(){
    this.router.navigate(['login'],
      {state : {
        'nombre' : this.mdl_nombre,
        'correo' : this.mdl_correo,
        'pass1' : this.mdl_contrasena1,
        'pass2' : this.mdl_contrasena2
      }, replaceUrl : true}
    )
  }

}
