import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { select } from '@angular-redux/store';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css']
})
export class GamesListComponent implements OnInit {

  @Input() games: any;
  @Input() count: number;
  @Input() page: number;
  @Input() loading: boolean;

  @Output() onpageChanged = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

}
