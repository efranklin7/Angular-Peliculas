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
  actorModel: actorEditDTO | undefined;
  @Output()
  out: EventEmitter<actorDTO> = new EventEmitter<actorDTO>();
  form!: FormGroup;
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: ['', Validators.required],
      fechaNacimiento: [''],
      foto: '',
      biografia: '',
    });

    //{year: 2023, month: 5, day: 26}
    if (this.actorModel != undefined) {
      this.form.patchValue(this.actorModel);
    }
  }
  getFile(file: File) {
    this.form.get('foto')?.setValue(file);
  }
  getTextArea(text: string) {
    //console.log(text);

    this.form.get('biografia')?.setValue(text);
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
