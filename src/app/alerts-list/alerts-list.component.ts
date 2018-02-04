import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-alerts-list',
  templateUrl: './alerts-list.component.html',
  styleUrls: ['./alerts-list.component.css']
})
export class AlertsListComponent implements OnInit {

  @Input() alerts: any;
  @Output() closeAlert = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
