import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CineDTO, CrearCineDTO } from '../Cine';
import { Coordenadas } from 'src/app/utilidades/mapa/Coordenadas';

@Component({
  selector: 'app-form-cines',
  templateUrl: './form-cines.component.html',
  styleUrls: ['./form-cines.component.css'],
})
export class FormCinesComponent implements OnInit {
  @Input()
  modelo!: CineDTO;

  @Output()
  out: EventEmitter<CrearCineDTO> = new EventEmitter<CrearCineDTO>();
  constructor(private formBuilder: FormBuilder) {}
  form!: FormGroup;
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      lat: ['', Validators.required],
      lng: ['', Validators.required],
    });
    if (this.modelo != undefined) {
      this.form.patchValue(this.modelo);
    }
  }
  getCoordenadas(coordenada: Coordenadas) {
    this.form.patchValue(coordenada);
    console.log(coordenada);
    this.check();
  }

  onSubmit() {
    //console.log(this.form.value);
    this.out.emit(this.form.value);
  }
  check() {
    console.log(this.form.value);
  }
}
