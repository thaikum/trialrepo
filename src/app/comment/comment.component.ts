import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  state = 'closed';
  insideClicked = false;
  close = false;
  reply: string;
  constructor() {
    this.reply = '';
  }

  ngOnInit(): void {
  }

  showReply(): void{
    this.close = false;
    this.state = this.state === 'opened' ? 'closed' : 'opened';
  }

  clicked(): void{
    this.insideClicked = true;
  }
  @HostListener('document:click')
  outsideClicked(): void{
    if (!this.insideClicked && this.close){
      this.state = 'closed';
    }else{
      this.insideClicked = false;
    }

    if(this.close){
      this.close = false;
    }else{
      this.close = true;
    }
  }
}
