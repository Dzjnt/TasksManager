import { Component, OnInit } from "@angular/core";
import { Calendar } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';

@Component({
  selector: 'calendar',
  templateUrl:"./calendar.component.html"
})
export class CalendarComponent implements OnInit {
  events: any[];
  options;



  ngOnInit() {
    this.options = {
      plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
      defaultDate: '2017-01-01',

      header: {
        left: 'prev,next',
        center: 'title',
        right: 'month,agendaWeek,agendaDay',
        prev: 'left-single-arrow',
        next: 'right-single-arrow',
        prevYear: 'left-double-arrow',
        nextYear: 'right-double-arrow'
      }
    };
    this.events = [
      {
        "title": "All Day Event",
        "start": "2017-01-01"
      },
      {
        "title": "Long Event",
        "start": "2017-01-07",
        "end": "2017-01-10"
      },
      {
        "title": "Repeating Event",
        "start": "2017-09T16:00:00"
      },
      {
        "title": "Repeating Event",
        "start": "2017-16T16:00:00"
      },
      {
        "title": "Conference",
        "start": "2017-01-11",
        "end": "2016-01-13"
      }
    ];

  }
}
