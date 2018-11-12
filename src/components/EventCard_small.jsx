import React, { Component } from 'react';

class EventCard_small extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
  }

  render() {
    return (
      // <div className="card-template card-template--small" onClick={() => this.setState({ count: this.state.count + 1 })}>
      <div className="card card--small">
        <div className={
          this.props.type === "critical" ? "critical card__header-wrap card__header-wrap--small" : "card__header-wrap card__header-wrap--small"
        }>
          <div className="card__header card__header--small"><img className="card__logo card__logo--small" src="" alt="" />
            <p className="card__title card__title--small">{this.props.size}</p>
            {/* <span>{this.state.count}</span> */}
          </div>
          <div className="card__status card__status--small">
            <p className="status-text card__source card__source--small"></p>
            <p className="status-text card__time card__time--small"></p>
          </div>
        </div>
      </div>
      // </div>
    );
  }
}

export default EventCard_small;
