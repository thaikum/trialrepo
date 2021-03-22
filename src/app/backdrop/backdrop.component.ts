import { Component, Output, Input, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-backdrop',
  templateUrl: './backdrop.component.html',
  styleUrls: ['./backdrop.component.css']
})
export class BackdropComponent implements OnInit {

  @Output() Hide = new EventEmitter();
  state = true;

  constructor() { }

  hide(): void{
    this.Hide.emit(true);
    this.state = false;
  }

  ngOnInit(): void {
  }

}
