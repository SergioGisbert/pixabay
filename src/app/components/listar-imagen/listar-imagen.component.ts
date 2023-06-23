import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ImagenService } from 'src/app/services/imagen.service';

@Component({
  selector: 'app-listar-imagen',
  templateUrl: './listar-imagen.component.html',
  styleUrls: ['./listar-imagen.component.css']
})
export class ListarImagenComponent {
  termino = ''
  suscripcion: Subscription
  listImagenes: any[] =[];
  loading = false;
  imagenPorPagina = 28;
  paginaActual = 1;
  calcularTotalPaginas: number;

  constructor(private _imagenService: ImagenService){
    this.calcularTotalPaginas = 0;
    this.suscripcion = this._imagenService.getTerminoBusqueda().subscribe(data => {
      this.termino=data;
      this.paginaActual = 1
      this.loading=true;
      this.listImagenes = []
      setTimeout(() => {
      this.obtenerImagenes();
      },1000)
    })

  }

  obtenerImagenes(){

    this._imagenService.getImagenes(this.termino, this.imagenPorPagina, this.paginaActual).subscribe(data => {
      this.loading = false

      if(data.hits.length === 0){
        this._imagenService.setError('Opss...No encontramos ningun resultado')
        return
      }
      this.calcularTotalPaginas = Math.ceil(data.totalHits/this.imagenPorPagina);
      this.listImagenes = data.hits;
    },error =>{
      this.loading =false
      this._imagenService.setError('Opss...Ocurrió un error')
    })
  }

  paginaAnterior(){
    this.paginaActual = this.paginaActual - 1; 
    this.loading = true;
    this.listImagenes=[];
    this.obtenerImagenes();
  }

  paginaPosterior(){
    this.paginaActual = this.paginaActual + 1;
    this.loading = true;
    this.listImagenes=[];
    this.obtenerImagenes();
  }

}
