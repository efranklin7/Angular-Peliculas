import { Component, OnInit } from '@angular/core';
import { CineDTO } from '../Cine';

@Component({
  selector: 'app-editar-cine',
  templateUrl: './editar-cine.component.html',
  styleUrls: ['./editar-cine.component.css'],
})
export class EditarCineComponent implements OnInit {
  constructor() {}
  modelo: CineDTO = { name: 'Cinepolis' };
  ngOnInit(): void {}
  onSubmit(event: CineDTO) {
    console.log(event);
  }
}
