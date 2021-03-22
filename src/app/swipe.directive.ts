import {Directive, ElementRef, AfterViewInit, Output, EventEmitter} from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[swipe]'
})

export class HammerGesturesDirective implements AfterViewInit {
  constructor(private el: ElementRef) {

  }
  static hammerInitialized = false;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onGesture = new EventEmitter();
  ngAfterViewInit(): void {

    if (!HammerGesturesDirective.hammerInitialized) {

      const hammertime = new Hammer(this.el.nativeElement);
      hammertime.get('swipe').set({ direction: Hammer.DIRECTION_ALL });
      hammertime.on('up', (ev) => {
        this.onGesture.emit('up');
      });
      hammertime.on('down', (ev) => {
        this.onGesture.emit('down');
      });
      hammertime.on('swipeleft', (ev) => {
        this.onGesture.emit('swipeleft');
      });
      hammertime.on('right', (ev) => {
        this.onGesture.emit('right');
      });
      hammertime.on('tap', (ev) => {
        this.onGesture.emit('tap');
      });

      HammerGesturesDirective.hammerInitialized = true;
    }


  }
}
