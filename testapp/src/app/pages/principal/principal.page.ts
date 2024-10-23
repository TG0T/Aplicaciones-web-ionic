import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonModal } from '@ionic/angular';
import { lastValueFrom } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  @ViewChild(IonModal) modal!: IonModal;

  listaSedes : any = []
  nombre : string = ''
  apellido : string = ''
  pass : string = ''

  constructor(private router : Router, private api : ApiService) { }


  async ngOnInit() {
    let obj = await this.api.listar()
    this.nombre = await obj.nombre
    this.apellido = await obj.apellido
    this.pass = await obj.pass
    await this.listarSedes()
  }

  async salir(){
    this.dismissModal()
    await this.api.cerrarSesion()
    this.router.navigate(['login'])
  }

  //Parte del modal
  dismissModal() {
    this.modal.dismiss();
  }

  async listarSedes(){
    this.listaSedes = []

    let data = this.api.obtenerSedes()
    let respuesta = await lastValueFrom(data)

    let json_texto = JSON.stringify(respuesta)
    let json = JSON.parse(json_texto)

    for(let x = 0; x < json[0].length; x++){
      let sede : any = {}

      sede.nombre = json[0][x].NOMBRE
      sede.direccion = json[0][x].DIRECCION
      sede.telefono = json[0][x].TELEFONO
      sede.horario = json[0][x].HORARIO_ATENCION
      sede.imagen = json[0][x].IMAGEN

      this.listaSedes.push(sede)
    }
  }

  perfil(){
    this.router.navigate(['perfil'])
  }
}
