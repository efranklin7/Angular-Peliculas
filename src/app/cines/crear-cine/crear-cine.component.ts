import { Component, OnInit } from '@angular/core';
import { CrearCineDTO } from '../Cine';

@Component({
  selector: 'app-crear-cine',
  templateUrl: './crear-cine.component.html',
  styleUrls: ['./crear-cine.component.css'],
})
export class CrearCineComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  onSubmit(event: CrearCineDTO) {
    console.log(event);
  }
}
