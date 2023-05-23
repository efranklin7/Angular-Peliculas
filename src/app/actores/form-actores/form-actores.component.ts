import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { actorDTO, actorEditDTO } from '../Actor';

@Component({
  selector: 'app-form-actores',
  templateUrl: './form-actores.component.html',
  styleUrls: ['./form-actores.component.css'],
})
export class FormActoresComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}
  @Input()
  actorModel!: actorEditDTO;
  @Output()
  out: EventEmitter<actorDTO> = new EventEmitter<actorDTO>();
  form!: FormGroup;
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: ['', Validators.required],
      fechaNacimiento: [''],
      foto: '',
    });

    //{year: 2023, month: 5, day: 26}
    if (this.actorModel != undefined) {
      this.form.patchValue(this.actorModel);
    }
  }
  getFile(file: File) {
    if (file) {
      const foto = this.form.get('foto');
      foto?.setValue(file);
    }
  }
  get nombre() {
    const nombre = this.form.get('nombre');
    if (nombre?.hasError('required')) {
      return 'El nombre es obligatorio';
    }
    return '';
  }

  submit() {
    this.out.emit(this.form.value);
    console.log(this.form.value);
  }
}
