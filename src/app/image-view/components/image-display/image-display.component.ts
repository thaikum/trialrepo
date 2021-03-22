import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-display',
  templateUrl: './image-display.component.html',
  styleUrls: ['./image-display.component.css']
})
export class ImageDisplayComponent implements OnInit {

  @Input() imageList;
  imageSrc;

  constructor() {
    this.imageSrc = 0;
  }

  ngOnInit(): void {
  }

  nextImage(): void{
    this.imageSrc = this.imageSrc < this.imageList.length - 1 ? this.imageSrc + 1 : 0;
  }

  previousImage(): void{
    this.imageSrc = this.imageSrc === 0 ? this.imageList.length - 1 : this.imageSrc - 1;
  }
}
