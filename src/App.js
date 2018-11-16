import React, { Component } from 'react';

import { Card } from './components/Card/index';

// Data
import eventsData from './events';

class App extends Component {
  render() {
    return (
      <div className="events-wrap">
        {
          eventsData.events.map(item => {
            return <Card {...item} />
          })
        }
      </div>
    );
  }
}

export default App;
