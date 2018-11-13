import React, { Component } from 'react';

// Components
import EventCard_small from './components/EventCard_small';
import EventCard_medium from './components/EventCard_medium';
import EventCard_large from './components/EventCard_large';

// Data
import eventsData from './events';

class App extends Component {
  render() {
    return (
      <div className="events-wrap">
        {
          eventsData.events.map(item => {
            switch (item.size) {
              case 's':
                return <EventCard_small {...item} />
              case 'm':
                return <EventCard_medium {...item} />
              case 'l':
                return <EventCard_large {...item} />
              default:
                return <h1>error</h1>
            }
          })
        }
      </div>
    );
  }
}

export default App;
