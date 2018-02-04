import {
  Directive,
  Input,
  ElementRef,
  Renderer,
  HostListener,
  OnInit
} from '@angular/core';

import { Store } from '@ngrx/store';
import * as formRoot from './common/index';
import * as layout from './common/layout/layout.actions';

@Directive({
  selector: '[appSidebarToggle]'
})
export class SidebarToggleDirective implements OnInit {

  public leftSidebarState: boolean;
  public rightSidebarState: boolean;

  @Input() sideBarToggle: string;

  @HostListener('click', ['$event'])
  onClick(e) {
    // left sidenav toggle
    if (this.sideBarToggle === 'left' && this.leftSidebarState) {
      this._store.dispatch( new layout.CloseLeftSidenavAction());
    } else if (this.sideBarToggle === 'left' && !this.leftSidebarState) {
      this._store.dispatch( new layout.OpenLeftSidenavAction());
    }

    // right sidenav toggle
    if (this.sideBarToggle === 'right' && this.rightSidebarState) {
      this._store.dispatch( new layout.CloseRightSidenavAction());
    } else if (this.sideBarToggle === 'right' && !this.rightSidebarState) {
      this._store.dispatch( new layout.OpenRightSidenavAction());
    }
  }

  constructor(private el: ElementRef,
    private renderer: Renderer,
    private _store: Store<formRoot.AppState>) {
      this.sideBarToggle = this.el.nativeElement.getAttribute('appSidebarToggle');
    }

  ngOnInit() {
    this._store.select(formRoot.getLayoutLeftSidenavState).subscribe((state) => {
      this.leftSidebarState = state;
    });
    this._store.select(formRoot.getLayoutRightSidenavState).subscribe((state) => {
      this.rightSidebarState = state;
    });
  }
}
