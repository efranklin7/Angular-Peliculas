import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-markdown',
  templateUrl: './input-markdown.component.html',
  styleUrls: ['./input-markdown.component.css'],
})
export class InputMarkdownComponent implements OnInit {
  active = 1;
  @Input()
  textAreaValue: string = '';
  @Input()
  myPlaceHolder: string = '';
  constructor() {}
  @Output()
  textArea: EventEmitter<string> = new EventEmitter<string>();
  ngOnInit(): void {}

  inputTextArea(event: any) {
    //console.log(event.target.value);
    this.textAreaValue = event.target.value;
    this.textArea.emit(event.target.value);
  }
}
