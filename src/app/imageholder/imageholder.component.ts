import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-imageholder',
  templateUrl: './imageholder.component.html',
  styleUrls: ['./imageholder.component.css']
})
export class ImageholderComponent implements OnInit {

  @Input() src;
  @Input() alt;
  details = false;
  detailStatus = 'closed';
  color = 'accent';
  isFavorite = false;

  constructor() { }

  showDetails(): void{
    this.details = !this.details;
    this.detailStatus = this.details ? 'opened' : 'closed';
  }

  favorite(): void{
    this.isFavorite = !this.isFavorite;
    this.color = this.isFavorite ? 'primary' : 'accent';
  }

  ngOnInit(): void {
  }

}
