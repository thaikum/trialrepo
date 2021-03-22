import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  title = 'Material';
  shouldRun = false;
  state = 'closed';
  icon = 'menu';
  onPhone = false;

  imageList = [
    {src: 'assets/hair1.jpg', alt: 'hair1'},
    {src: 'assets/hair2.jpeg', alt: 'hair1'},
    {src: 'assets/hair3.jpeg', alt: 'hair1'},
    {src: 'assets/hair4.jpeg', alt: 'hair1'},
    {src: 'assets/hair5.jpeg', alt: 'hair1'},
    {src: 'assets/hair3.jpeg', alt: 'hair1'},
    {src: 'assets/hair1.jpeg', alt: 'hair1'},
    {src: 'assets/hair4.jpeg', alt: 'hair1'},
    {src: 'assets/hair1.jpg', alt: 'hair1'},
    {src: 'assets/hair2.jpeg', alt: 'hair1'},
    {src: 'assets/hair3.jpeg', alt: 'hair1'},
    {src: 'assets/hair4.jpeg', alt: 'hair1'},
    {src: 'assets/hair5.jpeg', alt: 'hair1'},
    {src: 'assets/hair3.jpeg', alt: 'hair1'},
    {src: 'assets/hair1.jpeg', alt: 'hair1'},
  ];

  constructor() {
    this.showIcon();
  }

  ngOnInit(): void {
  }

  @HostListener('window:resize', ['$event'])
  onResize(event): void{
    this.showIcon();
  }

  showNav(): void{
    this.shouldRun = !this.shouldRun;
    this.state = this.shouldRun ? 'opened' : 'closed';
  }

  showIcon(): void{
    this.onPhone = window.innerWidth <= 600;
  }

  doSwipe(direction): void{
    if (direction === 'right'){
      this.showNav();
    }
  }

}
