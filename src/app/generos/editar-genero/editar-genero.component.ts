import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { generoCreacionDTO } from '../genero';

@Component({
  selector: 'app-editar-genero',
  templateUrl: './editar-genero.component.html',
  styleUrls: ['./editar-genero.component.css'],
})
export class EditarGeneroComponent implements OnInit {
  model: generoCreacionDTO = { name: 'Drama' };
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((p) => alert(p['id']));
  }
  guardarCambios(genero: generoCreacionDTO) {
    console.log(genero);
    this.router.navigate(['/generos']);
  }
}
