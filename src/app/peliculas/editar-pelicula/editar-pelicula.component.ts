import { Component, OnInit } from '@angular/core';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-editar-pelicula',
  templateUrl: './editar-pelicula.component.html',
  styleUrls: ['./editar-pelicula.component.css'],
})
export class EditarPeliculaComponent implements OnInit {
  constructor() {}

  modelo = {
    titulo: 'My Movie',
    resumen: 'Muy buena pelicula',
    enCines: true,
    trailer: 'www.ff.com',
    fechaLanzamiento: new NgbDate(2022, 5, 7),
    poster:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUEZL6744E04Zvh8S8uR6YCEmq1XWLmvraeA&usqp=CAU',
  };
  ngOnInit(): void {}
}
