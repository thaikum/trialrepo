import {Component, Input, Output, EventEmitter, OnInit, HostListener} from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  @Input() state;
  @Output() Hide = new EventEmitter();

  constructor() {
  }

  onHide(): void{
    this.Hide.emit(true);
  }

  @HostListener('click', ['$event'])
  onClick(): void
  {
    event.stopPropagation();
  }

  ngOnInit(): void {
  }
}
