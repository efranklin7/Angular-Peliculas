import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Categorias } from '../Categoria';
import { Cines } from '../Cines';

@Component({
  selector: 'app-form-peliculas',
  templateUrl: './form-peliculas.component.html',
  styleUrls: ['./form-peliculas.component.css'],
})
export class FormPeliculasComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}
  resumenPlaceHolder = 'Escribir Resumen';
  @Output()
  resumenMark: EventEmitter<string> = new EventEmitter<string>();
  form!: FormGroup;
  categoriaList: Categorias[] = [
    { key: 1, value: 'Accion' },
    { key: 2, value: 'Terror' },
    { key: 3, value: 'Romance' },
    { key: 4, value: 'Drama' },
  ];
  categoriaSeleccionada: Categorias[] = [];
  cineList: Cines[] = [
    {
      key: 1,
      value: 'Cinepolis',
    },
    { key: 2, value: 'CineMax' },
    { key: 3, value: 'Cinemex' },
  ];
  cineSeleccionado: Cines[] = [];
  @Input()
  modelo: any;
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      titulo: ['', Validators.required],
      resumen: '',
      enCines: false,
      trailer: '',
      fechaLanzamiento: '',
      poster: '',
      generoId: '',
      cineId: '',
    });
    if (this.modelo) {
      this.form.patchValue(this.modelo);
    }
  }
  getResumen(value: string) {
    this.form.patchValue({ resumen: value });
  }
  getPoster(value: any) {
    this.form.patchValue({ poster: value });
  }
  onSubmit() {
    //console.log(this.categoriaSeleccionada);
    let keysGeneros = this.categoriaSeleccionada.map((value) => value.key);
    this.form.get('generoId')?.patchValue(keysGeneros);
    let keysCines = this.cineSeleccionado.map((value) => value.key);
    this.form.get('cineId')?.patchValue(keysCines);
    console.log(this.form.value);
  }
}
