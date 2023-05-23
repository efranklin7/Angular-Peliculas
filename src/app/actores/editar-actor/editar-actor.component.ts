import { Component, OnInit } from '@angular/core';
import { actorDTO, actorEditDTO } from '../Actor';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-editar-actor',
  templateUrl: './editar-actor.component.html',
  styleUrls: ['./editar-actor.component.css'],
})
export class EditarActorComponent implements OnInit {
  constructor() {}
  actorModel: actorEditDTO = {
    nombre: 'Franklins',
    fechaNacimiento: new NgbDate(2022, 5, 7),
    foto: 'https://cdn.britannica.com/92/215392-050-96A4BC1D/Australian-actor-Chris-Hemsworth-2019.jpg',
  };
  ngOnInit(): void {}
}
