import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { base64 } from '../Base64';

@Component({
  selector: 'app-img-input',
  templateUrl: './img-input.component.html',
  styleUrls: ['./img-input.component.css'],
})
export class ImgInputComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  fileImg: any;
  @Input()
  urlImagenActual: string = '';
  @Output()
  file: EventEmitter<File> = new EventEmitter<File>();
  //async
  async fileUpload(event: any) {
    const file = event.target.files[0];
    try {
      const img = await base64(file);
      this.fileImg = img;
      this.file.emit(this.fileImg);
      this.urlImagenActual = '';
    } catch (error) {}
  }
}
