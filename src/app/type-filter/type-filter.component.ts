import {Component, NgZone, OnInit, ViewChild} from '@angular/core';
import { CdkTextareaAutosize} from '@angular/cdk/text-field';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-type-filter',
  templateUrl: './type-filter.component.html',
  styleUrls: ['./type-filter.component.css']
})
export class TypeFilterComponent implements OnInit {
  state = 'closed';
  icon = 'arrow_drop_up';
  category = 'Category';
  // tslint:disable-next-line:variable-name
  constructor(private _ngZone: NgZone) { }

  showCategory(): void{
    this.state = this.state === 'opened' ? 'closed' : 'opened';
    this.icon = this.icon === 'arrow_drop_down' ? 'arrow_drop_up' : 'arrow_drop_down';
  }
  switchCategory(cat): void{
    this.category = cat;
    this.showCategory();
  }
  @ViewChild('autosize') autosize: CdkTextareaAutosize;
  // tslint:disable-next-line:typedef
  triggerResize() {
    this._ngZone.onStable.pipe(take(1))
      .subscribe(() => this.autosize.resizeToFitContent(true));
  }



  ngOnInit(): void {
  }

}
