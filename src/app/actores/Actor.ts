import { NgbDate } from '@ng-bootstrap/ng-bootstrap';

export interface actorDTO {
  nombre: string;
  fechaNacimiento: NgbDate;
  foto: File;
}
export interface actorEditDTO {
  nombre: string;
  fechaNacimiento: NgbDate;
  foto: string;
}
