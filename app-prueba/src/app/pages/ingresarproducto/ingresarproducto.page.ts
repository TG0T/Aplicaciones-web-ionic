import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-ingresarproducto',
  templateUrl: './ingresarproducto.page.html',
  styleUrls: ['./ingresarproducto.page.scss'],
})
export class IngresarproductoPage implements OnInit {

  listaproductos : any = []
  mdl_correo : string = ''
  recuerdame = null

  constructor(private router : Router, private api : ApiService) { }

  ngOnInit() {
    let extras = this.router.getCurrentNavigation()?.extras
    if(extras?.state){
      this.mdl_correo = extras.state['correo'],
      this.recuerdame = extras.state['recuerdo']
    }
  }


  volver(){
    this.router.navigate(['contenido'],{
      state :{
        'correo' : this.mdl_correo,
        'recuerdo' : this.recuerdame
      }, replaceUrl : true
    }
    )
  }

}
