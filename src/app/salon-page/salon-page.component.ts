import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salon-page',
  templateUrl: './salon-page.component.html',
  styleUrls: ['./salon-page.component.css']
})
export class SalonPageComponent implements OnInit {

  commentState = 'closed';
  dropIcon = 'arrow_drop_down';
  imageList = [
    {src: 'assets/hair1.jpeg', alt: 'hair1'},
    {src: 'assets/hair2.jpeg', alt: 'hair1'},
    {src: 'assets/hair3.jpeg', alt: 'hair1'},
    {src: 'assets/hair4.jpeg', alt: 'hair1'},
    {src: 'assets/hair5.jpeg', alt: 'hair1'},
    {src: 'assets/hair3.jpeg', alt: 'hair1'},
    {src: 'assets/hair1.jpeg', alt: 'hair1'},
    {src: 'assets/hair4.jpeg', alt: 'hair1'},
  ];


  constructor() { }

  salonImages = [
    'assets/salon1.jpeg',
    'assets/salon2.jpeg',
    'assets/salon3.jpeg'
  ];

  showComments(): void{
    this.commentState = this.commentState === 'closed' ? 'opened' : 'closed';
    this.dropIcon = this.dropIcon === 'arrow_drop_down' ? 'arrow_drop_up' : 'arrow_drop_down';
  }

  ngOnInit(): void {
  }

}
