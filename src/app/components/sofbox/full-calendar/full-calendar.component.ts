import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGrigPlugin from '@fullcalendar/timegrid';

@Component({
  selector: 'app-full-calendar',
  templateUrl: './full-calendar.component.html',
  styleUrls: ['./full-calendar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FullCalendarComponent implements OnInit {

  constructor() { }
  @Input() calendarWeekends = true;
  @Input() calendarPlugins = [dayGridPlugin, timeGrigPlugin];
  @Input() calendarEvents: any;
  ngOnInit() {
  }

}
