import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { generoCreacionDTO } from '../genero';

@Component({
  selector: 'app-crear-genero',
  templateUrl: './crear-genero.component.html',
  styleUrls: ['./crear-genero.component.css'],
})
export class CrearGeneroComponent implements OnInit {
  constructor(private router: Router, private rou: ActivatedRoute) {}
  ngOnInit(): void {}

  guardarCambios(g: generoCreacionDTO) {
    console.log(g);
  }
}
