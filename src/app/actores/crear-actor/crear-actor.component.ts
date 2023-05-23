import { Component, OnInit } from '@angular/core';
import { actorDTO } from '../Actor';

@Component({
  selector: 'app-crear-actor',
  templateUrl: './crear-actor.component.html',
  styleUrls: ['./crear-actor.component.css'],
})
export class CrearActorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  crearActor(actor: actorDTO) {
    console.log(actor);
  }
}
