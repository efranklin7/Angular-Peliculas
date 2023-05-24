import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrearCineDTO } from '../Cine';

@Component({
  selector: 'app-form-cines',
  templateUrl: './form-cines.component.html',
  styleUrls: ['./form-cines.component.css'],
})
export class FormCinesComponent implements OnInit {
  @Input()
  modelo!: CrearCineDTO;

  @Output()
  out: EventEmitter<CrearCineDTO> = new EventEmitter<CrearCineDTO>();
  constructor(private formBuilder: FormBuilder) {}
  form!: FormGroup;
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
    });
    if (this.modelo != undefined) {
      this.form.patchValue(this.modelo);
    }
  }

  onSubmit() {
    //console.log(this.form.value);
    this.out.emit(this.form.value);
  }
}
