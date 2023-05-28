import { Component, OnInit } from '@angular/core';
import { CineDTO } from '../Cine';

@Component({
  selector: 'app-editar-cine',
  templateUrl: './editar-cine.component.html',
  styleUrls: ['./editar-cine.component.css'],
})
export class EditarCineComponent implements OnInit {
  constructor() {}
  modelo: CineDTO = {
    name: 'Cinepolis',
    lat: 32.62213527409616,
    lng: -475.40753173867427,
  };
  ngOnInit(): void {}
  onSubmit(event: CineDTO) {
    console.log(event);
  }
}
