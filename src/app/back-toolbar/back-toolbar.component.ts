import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-back-toolbar',
  templateUrl: './back-toolbar.component.html',
  styleUrls: ['./back-toolbar.component.css']
})
export class BackToolbarComponent implements OnInit {

  constructor(private location: Location) { }

  goBack(): void{
    this.location.back();
  }

  ngOnInit(): void {
  }

}
