import React, { Component } from 'react';

// Libraries
const classNames = require('classnames');

class EventCard_small extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
  }

  render() {
    const headerClass = classNames({
      'card__header-wrap card__header-wrap--small': true,
      'critical': this.props.type === 'critical',
      'have-description': this.props.description
    });
    return (
      <div className="card card--small">
        <div className={headerClass}>
          <div className="card__header card__header--small"><img className="card__logo card__logo--small" src={`./assets/${this.props.icon}.svg`} alt="" />
            <p className="card__title card__title--small">{this.props.title}</p>
          </div>
          <div className="card__status card__status--small">
            <p className="status-text card__source card__source--small">{this.props.source}</p>
            <p className="status-text card__time card__time--small">{this.props.time}</p>
          </div>
        </div>
        {
          this.props.description &&
          <div className="card__description card__description--small">
            <p className="card__description-paragraph card__description-paragraph--small">{this.props.description}</p>
          </div>
        }
      </div>
    );
  }
}

export default EventCard_small;
