import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoPeliculasComponent } from './peliculas/listado-peliculas/listado-peliculas.component';
import { ListadoGenericoComponent } from './utilidades/listado-generico/listado-generico.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MenuComponent } from './menu/menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { IndiceGenerosComponent } from './generos/indice-generos/indice-generos.component';
import { CrearGeneroComponent } from './generos/crear-genero/crear-genero.component';
import { CrearActorComponent } from './actores/crear-actor/crear-actor.component';
import { IndiceActoresComponent } from './actores/indice-actores/indice-actores.component';

import { CrearPeliculaComponent } from './peliculas/crear-pelicula/crear-pelicula.component';
import { IndiceCinesComponent } from './cines/indice-cines/indice-cines.component';
import { CrearCineComponent } from './cines/crear-cine/crear-cine.component';

import { EditarGeneroComponent } from './generos/editar-genero/editar-genero.component';
import { EditarActorComponent } from './actores/editar-actor/editar-actor.component';
import { EditarPeliculaComponent } from './peliculas/editar-pelicula/editar-pelicula.component';
import { ReactiveFormsModule } from '@angular/forms';
//import { FormComponent } from './generos/form/form.component';
import { GenerosFormComponent } from './generos/generos-form/generos-form.component';
import { FiltroPeliculasComponent } from './peliculas/filtro-peliculas/filtro-peliculas.component';
import { FormActoresComponent } from './actores/form-actores/form-actores.component';
import { ImgInputComponent } from './utilidades/img-input/img-input.component';
import { InputMarkdownComponent } from './utilidades/input-markdown/input-markdown.component';
import { MarkdownModule } from 'ngx-markdown';
import { FormCinesComponent } from './cines/form-cines/form-cines.component';
import { EditarCineComponent } from './cines/editar-cine/editar-cine.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoPeliculasComponent,
    ListadoGenericoComponent,
    MenuComponent,
    LandingPageComponent,
    IndiceGenerosComponent,
    CrearGeneroComponent,
    CrearActorComponent,
    IndiceActoresComponent,

    CrearPeliculaComponent,
    IndiceCinesComponent,
    CrearCineComponent,

    EditarGeneroComponent,
    EditarActorComponent,
    EditarPeliculaComponent,
    //FormComponent,
    GenerosFormComponent,
    FiltroPeliculasComponent,
    FormActoresComponent,
    ImgInputComponent,
    InputMarkdownComponent,
    FormCinesComponent,
    EditarCineComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgbModule,
    ReactiveFormsModule,
    MarkdownModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
