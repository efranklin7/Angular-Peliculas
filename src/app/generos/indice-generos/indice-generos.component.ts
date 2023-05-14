import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-indice-generos',
  templateUrl: './indice-generos.component.html',
  styleUrls: ['./indice-generos.component.css'],
})
export class IndiceGenerosComponent implements OnInit {
  @Output()
  inicio = new EventEmitter<number>();
  constructor() {}

  ngOnInit(): void {}
}
