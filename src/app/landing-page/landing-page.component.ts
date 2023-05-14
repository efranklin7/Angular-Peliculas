import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit {
  constructor() {}

  PeliculasEnCine: any;

  ngOnInit(): void {
    setTimeout(() => {
      this.PeliculasEnCine = [
        {
          titulo: 'Harry Potter',
          img: 'https://cdn.shopify.com/s/files/1/0265/2769/4934/products/filmz.ru_f_30544-scaled_1722x.jpg?v=1621953725',
        },
        {
          titulo: 'Avatar',
          img: 'https://es.web.img3.acsta.net/medias/nmedia/18/92/13/82/20182449.jpg',
        },
      ];
    }, 700);
  }
}
