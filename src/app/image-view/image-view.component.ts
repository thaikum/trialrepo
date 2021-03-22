import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-view',
  templateUrl: './image-view.component.html',
  styleUrls: ['./image-view.component.css']
})
export class ImageViewComponent implements OnInit {

  constructor() { }
  imageList = [
    'assets/hair1.jpeg',
    'assets/hair2.jpeg'
  ];
  ngOnInit(): void {
  }

}
