import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImagenService {

  private error$ = new Subject<string>();
  private terminoBusqueda$ = new Subject<string>();

  constructor(private http: HttpClient) {
  }

  setError(message:string){
    this.error$.next(message);
  }

  getError(): Observable<string>{
    return this.error$.asObservable();
  }

  enviarTerminoBusqueda(termino: string){
    this.terminoBusqueda$.next(termino);
  }

  getTerminoBusqueda(): Observable<string>{
    return this.terminoBusqueda$.asObservable();
  }

  getImagenes(termino: string, numeroImagenes: number, paginaActual: number): Observable<any>{
    const KEY = '36945240-03d2a0ca8ad0bed14339731a1'
    const URL = 'https://pixabay.com/api/?key='+KEY+'&q='+ termino +'&per_page='+numeroImagenes+'&page='+paginaActual;
    return this.http.get(URL)
  }
}
