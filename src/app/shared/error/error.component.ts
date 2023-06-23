import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ImagenService } from 'src/app/services/imagen.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent {
  texto = '';
  mostrar = false;
  suscripcion: Subscription

  constructor(private _imagenService: ImagenService){
    this.suscripcion = this._imagenService.getError().subscribe(data => {
      this.texto = data;
      this.mostrarMensaje()
    });
  }
  ngOnDestroy(): void{
    this.suscripcion.unsubscribe();
  }

  mostrarMensaje(){
    this.mostrar = true;
    setTimeout(() => {
      this.mostrar = false
    }, 2000)
  }

}
