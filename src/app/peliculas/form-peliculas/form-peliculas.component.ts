import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  listCategoria: string[] = ['terror', 'accion', 'drama', 'comedia'];
  listCategoriaSeleccionada: string[] = [];
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
    console.log(this.form.value);
  }
  categoriaSeleccionada(index: number) {
    console.log(index);
    const value = this.listCategoriaSeleccionada.find((value) => {
      return this.listCategoria[index] == value;
    });

    if (!value) {
      this.listCategoriaSeleccionada.push(this.listCategoria[index]);
    }
  }
  categoriaDeseleccionada(index: number) {
    console.log(index);
    this.listCategoriaSeleccionada.splice(index, 1);
  }
  removeAllCategorias() {
    this.listCategoriaSeleccionada.splice(0);
  }
  AddAllCategorias() {
    //agregar todos
    if (this.listCategoriaSeleccionada.length == 0) {
      this.listCategoria.forEach((value) => {
        this.listCategoriaSeleccionada.push(value);
      });
    }
    //agregar los que falten
    else {
      for (let i = 0; i <= this.listCategoria.length; i++) {
        let category = this.listCategoria[i];
        if (this.listCategoriaSeleccionada.includes(category)) {
          continue;
        } else {
          this.listCategoriaSeleccionada.push(category);
        }
      }
      console.log(this.listCategoriaSeleccionada);
    }
  }
}
