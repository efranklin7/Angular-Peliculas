import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-filtro-peliculas',
  templateUrl: './filtro-peliculas.component.html',
  styleUrls: ['./filtro-peliculas.component.css'],
})
export class FiltroPeliculasComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private location: Location,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  form!: FormGroup;
  peliculas = [
    {
      titulo: 'Harry Potter',
      img: 'https://cdn.shopify.com/s/files/1/0265/2769/4934/products/filmz.ru_f_30544-scaled_1722x.jpg?v=1621953725',
      genero: [1],
      proximosEstrenos: false,
      enCines: true,
    },
    {
      titulo: 'Avatar',
      img: 'https://es.web.img3.acsta.net/medias/nmedia/18/92/13/82/20182449.jpg',
      genero: [2, 3],
      proximosEstrenos: true,
      enCines: false,
    },
    {
      titulo: 'Batman',
      img: 'https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_FMjpg_UX1000_.jpg',
      genero: [4],
      proximosEstrenos: true,
      enCines: false,
    },
  ];
  generos = [
    { id: 1, nombre: 'Drama' },
    { id: 2, nombre: 'Terror' },
    { id: 3, nombre: 'Comedia' },
    { id: 4, nombre: 'Accion' },
  ];
  peliculasOriginal = this.peliculas;
  //
  formOriginal = {
    titulo: [''],
    generoId: 0,
    proximosEstrenos: false,
    enCines: false,
  };
  //

  ngOnInit(): void {
    this.form = this.formBuilder.group(this.formOriginal);
    this.readQueryString();
    this.filter(this.form.value);

    this.form.valueChanges.subscribe((value) => {
      this.peliculas = this.peliculasOriginal;
      this.filter(value);
      this.queryString(value);
    });
  }
  readQueryString() {
    this.activatedRoute.queryParams.subscribe((v) => {
      let obj: any = {};
      if (v['titulo']) {
        obj.titulo = v['titulo'];
      }
      if (v['genero']) {
        obj.generoId = Number(v['genero']);
      }
      if (v['estrenos']) {
        obj.proximosEstrenos = v['estrenos'];
      }
      if (v['enCines']) {
        obj.enCines = v['enCines'];
      }
      this.form.patchValue(obj);
    });
  }
  queryString(value: any) {
    const query = [];

    if (value.titulo != '') {
      query.push(`titulo=${value.titulo}`);
      //console.log('no deberia escrinrse');
    }
    if (value.generoId != 0) {
      query.push(`genero=${value.generoId}`);
    }
    if (value.proximosEstrenos) {
      query.push(`estrenos=${value.proximosEstrenos}`);
    }
    if (value.enCines) {
      query.push(`enCines=${value.enCines}`);
    }
    const queryString = query.join('&');
    this.location.replaceState('/peliculas/buscar', queryString);
    //-----------------dos maneras mas de hacerlo ---------------
    //this.location.replaceState(`/peliculas/buscar?${queryString}`);
    //this.router.navigateByUrl(`/peliculas/buscar?${queryString}`);
  }

  filter(value: any) {
    if (value.generoId == 0) {
      this.peliculas = this.peliculasOriginal;
    }
    if (value.titulo) {
      //console.log(value.titulo);

      this.peliculas = this.peliculas.filter((pelicula) =>
        pelicula.titulo.toLowerCase().includes(value.titulo)
      );
    }
    if (value.generoId) {
      this.peliculas = this.peliculas.filter((pelicula) =>
        pelicula.genero.includes(Number(value.generoId))
      );
    }
    if (value.proximosEstrenos) {
      this.peliculas = this.peliculas.filter(
        (pelicula) => pelicula.proximosEstrenos == true
      );
    }
    if (value.enCines) {
      this.peliculas = this.peliculas.filter(
        (pelicula) => pelicula.enCines == true
      );
    }
  }
  submited() {
    console.log(this.form.value);
  }
  limpiar() {
    this.form.patchValue(this.formOriginal);
    this.location.replaceState(`/peliculas/buscar`);
  }
}
