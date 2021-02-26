import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

export default class DemoApp extends React.Component {
  render() {
    return (
      <div className='offset-md-2'>
        
      <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
      />

      </div>
    )
  }
}