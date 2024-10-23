import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-listarproducto',
  templateUrl: './listarproducto.page.html',
  styleUrls: ['./listarproducto.page.scss'],
})
export class ListarproductoPage implements OnInit {

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
    console.log('Correo: '+this.mdl_correo + ' Recordar?: ' + this.recuerdame)
  }

  async listarProductos(){
    this.listaproductos = []

    let data = this.api.listarProducto()
    let respuesta = await lastValueFrom(data)

    let json_texto = JSON.stringify(respuesta)
    let json = JSON.parse(json_texto)

    for(let x = 0; x < json[0].length; x++){
      let prod : any = {}

      prod.codigo = json[0][x].p_codigo
      prod.nombre = json[0][x].p_nombre
      prod.descripcion = json[0][x].p_descripcion
      prod.precio = json[0][x].p_precio
      prod.mail = json[0][x].p_mail_creado

      this.listaproductos.push(prod)
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
