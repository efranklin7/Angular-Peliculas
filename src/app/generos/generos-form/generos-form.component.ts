import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { primeraLetraMayuscula } from 'src/app/utilidades/listado-generico/validators/primeraLetraMayuscula';
import { miValidacion } from 'src/app/utilidades/listado-generico/validators/pruebaValidator';
import { generoCreacionDTO } from '../genero';

@Component({
  selector: 'app-generos-form',
  templateUrl: './generos-form.component.html',
  styleUrls: ['./generos-form.component.css'],
})
export class GenerosFormComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  //formBuilder: configurar los campos del form
  form!: FormGroup; //representa los campos del form junto a su configuraciones
  @Input()
  models: generoCreacionDTO | undefined;
  @Output()
  value: EventEmitter<generoCreacionDTO> =
    new EventEmitter<generoCreacionDTO>();
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [
        '',
        [Validators.required, primeraLetraMayuscula(), miValidacion()],
      ],
    });
    if (this.models != undefined) {
      this.form.patchValue(this.models);
    }
  }
  get name() {
    return this.form.get('name');
  }
  guardarCambios() {
    alert('exito');
    this.value.emit(this.form.value);
    /*this.form.valueChanges.subscribe({
      next: (v) => {
        console.log(v);
      },
    });*/
    //console.log('noexito');
    // this.router.navigate(['/generos']);
  }
  getErrorControl(): string {
    let campo = this.form.get('name');

    if (campo?.hasError('required')) {
      return 'El nombre es requerido';
    }
    if (campo?.hasError('primeraLetraMayuscula')) {
      return campo.getError('primeraLetraMayuscula').message;
    }
    if (campo?.hasError('stringMust')) {
      return campo.getError('stringMust').message;
    }

    return '';
  }
}
