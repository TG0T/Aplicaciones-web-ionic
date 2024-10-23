import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {

  constructor(private router : Router, private api : ApiService) { }

  ngOnInit() {
    this.api.tabla()
    this.api.tablaL()

    setTimeout(async () => {
      let cantidadSesion = await this.api.obtenerSesion()

      if(cantidadSesion == '0'){
        this.router.navigate(['login'])
      }else{
        this.router.navigate(['principal'])
      }
      
    }, 2500);
  }

}
