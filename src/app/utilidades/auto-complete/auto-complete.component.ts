import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Observable, OperatorFunction } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.css'],
})
export class AutoCompleteComponent implements OnInit {
  constructor() {}

  //form: FormControl = new FormControl();
  arraySeleccionados: any[] = [];
  ngOnInit(): void {}
  model: any;

  actores = [
    {
      nombre: 'Tom Holland',
      foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnsyDJHbWaZ59Tipv6SIJqL0BjmMKh1sBeuQ&usqp=CAU',
    },
    {
      nombre: 'Tom Hanks',
      foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnsyDJHbWaZ59Tipv6SIJqL0BjmMKh1sBeuQ&usqp=CAU',
    },
    {
      nombre: 'Tom Cruise',
      foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnsyDJHbWaZ59Tipv6SIJqL0BjmMKh1sBeuQ&usqp=CAU',
    },
    {
      nombre: 'Albert Wesker',
      foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnsyDJHbWaZ59Tipv6SIJqL0BjmMKh1sBeuQ&usqp=CAU',
    },
  ];
  search: OperatorFunction<string, readonly any[]> = (
    text$: Observable<string>
  ) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map((term) =>
        term.length < 2
          ? []
          : this.actores
              .filter(
                (v) => v.nombre.toLowerCase().indexOf(term.toLowerCase()) > -1
              )
              .slice(0, 10)
              .map((obj) => {
                return obj.nombre;
              })
      )
    );

  model1() {
    let val = this.actores.filter((v) => {
      return v.nombre == this.model;
    });
    //console.log(val);
    let val2 = this.arraySeleccionados.find((v) => {
      return v.nombre == this.model;
    });
    console.log(val2);
    if (val.length > 0 && val2 == undefined) {
      this.arraySeleccionados.push(val[0]);
    }
    // console.log(this.arraySeleccionados);
  }
  deleteActor(index: number) {
    console.log(index);
    this.arraySeleccionados.splice(index, 1);
  }
}
