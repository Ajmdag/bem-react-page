import React, { Component } from 'react';



class EventCard_large extends Component {
  render() {
    return (
      <div className="card card--large">
        <div className="card__header-wrap card__header-wrap--large">
          <div className="card__header card__header--large"><img className="card__logo card__logo--large" src="" alt="" />
            <p className="card__title card__title--large">{this.props.size}</p>
          </div>
          <div className="card__status card__status--large">
            <p className="status-text card__source card__source--large">{this.props.size}</p>
            <p className="status-text card__time card__time--large">{this.props.size}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default EventCard_large;
