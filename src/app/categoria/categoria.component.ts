import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../services/categoria.service';
import { Categoria } from '../domain/categoria';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  categorias : Categoria[]; 

  constructor(private categoriaService : CategoriaService) {
this.getCategorias();
   }

  ngOnInit() {
  }

  getCategorias(){
    this.categoriaService.getCategorias()
      .subscribe(response => {
        // Recebe JSON
        this.categorias = response;
        console.log(this.categorias[0].nomeCategoria);
      })



  }

}
