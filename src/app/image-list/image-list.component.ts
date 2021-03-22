import {Component, HostListener, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {

  @Input() images;

  onPhone = false;

  constructor() {
    this.resize();
  }
  @HostListener('window:resize', ['$event'])
  onResize(event): void{
    this.resize();
  }

  resize(): void{
    this.onPhone = window.innerWidth <= 600;
  }
  ngOnInit(): void {
  }

}
