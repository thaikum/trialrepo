import {Component, HostListener, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {

  @Input() images;

  onPhone = false;
  onTab = false;
  onDesktop = false;
  small = false; // below 576px
  medium = false; // below 768px
  large = true; // below 992px
  extraLarge = false; // below 1200 6
  extraLargeLarge = false; // above 1400;
  displayImages?;
  width?;


  constructor() {}
  @HostListener('window:resize', ['$event'])
  onResize(event): void{
    this.resize();
  }

  createGrid(): void{
    if (this.small){
      this.displayImages = this.arraySplit(this.images, 2);
      this.width = window.innerWidth / 2.1;
    }else if (this.medium){
      this.displayImages = this.arraySplit(this.images, 3);
      this.width = window.innerWidth / 3.2;
    }else if (this.large){
      this.displayImages = this.arraySplit(this.images, 4);
      this.width = window.innerWidth / 4.2
    }else if (this.extraLarge){
      this.displayImages = this.arraySplit(this.images, 5);
      this.width = window.innerWidth / 5.3;
    }else{
      this.displayImages = this.arraySplit(this.images, 6);
      this.width = window.innerWidth / 6.4;
    }
  }

  resize(): void{
    this.small = window.innerWidth <= 576;
    this.medium = window.innerWidth <= 768 && window.innerWidth > 576;
    this.large = window.innerWidth <= 992 && window.innerWidth > 768;
    this.extraLarge = window.innerWidth <= 1200 && window.innerWidth > 992;
    this.extraLargeLarge = window.innerWidth > 1400;
    this.createGrid();
  }

  arraySplit(arr, times): any{
    if (arr){
      let subArrayIndex = 0;
      const finalArr = [];

      // tslint:disable-next-line:prefer-for-of
      for (let x = 0; x < arr.length; x++){
        if ((finalArr.length - 1) < subArrayIndex){
          const subArr = [];
          subArr[0] = arr[x];
          finalArr.push(subArr);
        }else{
          finalArr[subArrayIndex].push(arr[x]);
        }
        subArrayIndex++;
        subArrayIndex = subArrayIndex === times ? 0 : subArrayIndex;
      }
      return finalArr;
    }else{
      return [];
    }
  }
  ngOnInit(): void {
    this.resize();
  }

}
