import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  PeliculasEnCine: any;

  ngOnInit(): void {
    setTimeout(() => {
      this.PeliculasEnCine = [
        {
          titulo: 'Harry Potter',
        },
        {
          titulo: 'Avatar',
        },
      ];
    }, 700);
  }
}
