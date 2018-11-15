import React, { Component } from 'react';

// Components
// import Card_small from './components/Card/_size/Card_small';
// import Card_medium from './components/Card/_size/Card_medium';
// import Card_large from './components/Card/_size/Card_large';

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
