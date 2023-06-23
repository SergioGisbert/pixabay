import { Component } from '@angular/core';
import { ImagenService } from 'src/app/services/imagen.service';

@Component({
  selector: 'app-buscar-imagen',
  templateUrl: './buscar-imagen.component.html',
  styleUrls: ['./buscar-imagen.component.css']
})
export class BuscarImagenComponent {
  nombreImagen: string;

  constructor(private _imagenServices: ImagenService){
    this.nombreImagen = '';
  }

  buscarImagenes(){
    if(this.nombreImagen == ''){
      this._imagenServices.setError('Añade texto de busqueda')
      return
    }
    this._imagenServices.enviarTerminoBusqueda(this.nombreImagen)
  }
}
