import {
  Directive,
  ElementRef,
  Renderer,
  OnInit,
  AfterViewInit,
  AfterViewChecked
 } from '@angular/core';
 import { Store } from '@ngrx/store';
 import * as fromRoot from './common/index';
 // import $ = require('jquery');
 import * as $ from 'jquery';

@Directive({
  selector: '[appSidebarWatch]'
})
export class SidebarWatchDirective implements OnInit {

  constructor(private el: ElementRef, private _store: Store<fromRoot.AppState>) { }

  ngOnInit() {
    this._store.select(fromRoot.getLayoutLeftSidenavState).subscribe((state) => {
      if (this.el.nativeElement.className === 'left-sidebar') {
        if (state) {
          $('#main-content').css('margin-left', '300px');
          $(this.el.nativeElement).css('width', '300px');
        } else {
          $('#main-content').css('margin-left', '0');
          $(this.el.nativeElement).css('width', '0');
        }
      }
    });

    this._store.select(fromRoot.getLayoutRightSidenavState).subscribe((state) => {
      if (this.el.nativeElement.className === 'right-sidebar') {
        console.log('test');
        if (state) {
          $('#fade').addClass('fade-in');
          $('#rightBar-body').css('opacity', '1');
          $('body').css('overflow', 'hidden');
          $(this.el.nativeElement).css('width', '60%');
        } else {
          $('#fade').removeClass('fade-in');
          $('#rightBar-body').css('opacity', '0');
          $('body').css('overflow', 'auto');
          $(this.el.nativeElement).css('width', '0');
        }
      }
    });
  }
}
