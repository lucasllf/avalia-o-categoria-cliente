import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Categoria } from '../domain/categoria';

@Injectable()
export class CategoriaService {

  constructor(private http : HttpClient) { }

  getCategorias() : Observable<Categoria[]>{

    return this.http.get<Categoria[]>(`https://tcc-lojavirtual.herokuapp.com/categorias`);
  }
}
