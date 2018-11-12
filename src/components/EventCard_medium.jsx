import React, { Component } from 'react';

class EventCard_medium extends Component {
  render() {
    return (
      <div className="card card--medium">
        <div className={this.props.type === "critical" ? "critical card__header-wrap card__header-wrap--medium" : "card__header-wrap card__header-wrap--medium"}>
          <div className="card__header card__header--medium"><img className="card__logo card__logo--medium" src="" alt="" />
            <p className="card__title card__title--medium">{this.props.size}</p>
          </div>
          <div className="card__status card__status--medium">
            <p className="status-text card__source card__source--medium"></p>
            <p className="status-text card__time card__time--medium"></p>
          </div>
        </div>
      </div>
    );
  }
}

export default EventCard_medium;
