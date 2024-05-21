import { Component, OnInit } from '@angular/core';
declare function calendar(): void;

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit{
  constructor() { }

  ngOnInit(): void {
    calendar(); 
  }

}
