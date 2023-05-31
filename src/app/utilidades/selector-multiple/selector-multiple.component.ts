import { Component, Input, OnInit } from '@angular/core';
import { Categorias } from 'src/app/peliculas/Categoria';

@Component({
  selector: 'app-selector-multiple',
  templateUrl: './selector-multiple.component.html',
  styleUrls: ['./selector-multiple.component.css'],
})
export class SelectorMultipleComponent implements OnInit {
  constructor() {}
  @Input()
  seleccionados: Categorias[] = [];
  @Input()
  desEleccionados: Categorias[] = [];

  ngOnInit(): void {}
  //Seleccion de una categoria
  categoriaSeleccionada(categoria: Categorias, index: number) {
    console.log(index);
    this.seleccionados.push(categoria);
    this.desEleccionados.splice(index, 1);
  }
  categoriaDeseleccionada(categoria: Categorias, index: number) {
    console.log(index);

    this.desEleccionados.push(categoria);
    this.seleccionados.splice(index, 1);
  }
  AddAllCategorias() {
    this.seleccionados.push(...this.desEleccionados);
    this.desEleccionados = [];
  }
  removeAllCategorias() {
    this.desEleccionados.push(...this.seleccionados);
    this.seleccionados = [];
  }
}
