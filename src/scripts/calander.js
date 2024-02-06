import $ from 'jquery';
import 'moment';
import 'fullcalendar';

$(document).ready(() => {
  $('#calendar').fullCalendar({
    events: [
      {
        title: 'Event 1',
        start: '2023-12-12',
      },
      {
        title: 'Event 2',
        start: '2023-12-15',
        end: '2023-12-19',
      },
      // Add more events as needed
    ],
  });
});