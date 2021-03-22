import {Component, Output, EventEmitter, OnInit, Input, HostListener} from '@angular/core';

@Component({
  selector: 'app-image-details',
  templateUrl: './image-details.component.html',
  styleUrls: ['./image-details.component.css']
})
export class ImageDetailsComponent implements OnInit {
  @Output() Hide = new EventEmitter();
  @Input() detailState;
  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('click', ['$event'])
  stopPropagation(): void
  {
    event.stopPropagation();
  }

  hideDetails(): void{
    this.Hide.emit(true);
  }
}
