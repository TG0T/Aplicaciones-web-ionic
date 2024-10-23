import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-listarproductoxcorreo',
  templateUrl: './listarproductoxcorreo.page.html',
  styleUrls: ['./listarproductoxcorreo.page.scss'],
})
export class ListarproductoxcorreoPage implements OnInit {

  ruta : string = 'https://programadormaldito.cl/route/producto_duoc_obtener_x_mail?mail='
  listaproductos : any = []

  mdl_correo : string = ''
  recuerdame = null

  constructor(private router : Router, private http : HttpClient) { }

  ngOnInit() {
    let extras = this.router.getCurrentNavigation()?.extras
    if(extras?.state){
      this.mdl_correo = extras.state['correo'],
      this.recuerdame = extras.state['recuerdo']
    }
    console.log('Correo: '+this.mdl_correo + ' Recordar?: ' + this.recuerdame)
    
  }

  correo(){
    return this.http.get(this.ruta + this.mdl_correo).pipe()
  }

  async listarProductosxCorreo(){
    this.listaproductos = []

    let data = this.correo()
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
