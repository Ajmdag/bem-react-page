import React, { Component } from 'react';

// Libraries
const classNames = require('classnames');

class EventCard_large extends Component {
  render() {
    const headerClass = classNames({
      'card__header-wrap card__header-wrap--small': true,
      'critical': this.props.type === 'critical',
      'have-description': this.props.description
    });
    return (
      <div className="card card--large">
        <div className={headerClass}>
          <div className="card__header card__header--large"><img className="card__logo card__logo--large" src={`./assets/${this.props.icon}.svg`} alt="" />
            <p className="card__title card__title--large">{this.props.title}</p>
          </div>
          <div className="card__status card__status--large">
            <p className="status-text card__source card__source--large">{this.props.source}</p>
            <p className="status-text card__time card__time--large">{this.props.time}</p>
          </div>
        </div>
        {
          this.props.description &&
          <div className="card__description card__description--large">
            <p className="card__description-paragraph card__description-paragraph--large">{this.props.description}</p>
            {
              this.props.data.type === 'graph' &&
              <div className="card__image-container"><img src="./assets/richdata.svg" className="card__image" alt="" /></div>
            }
            {
            this.props.data.image &&
            <div className="card__image-container" id="hoover-container">
            <img className="card__image"
              id="hoover"
              touch-action="none"
              srcSet="./assets/bitmap.png 768w,
              ./assets/bitmap2x.png 1366w,
              ./assets/bitmap3x.png 1920w"
              src="./assets/bitmap2x.png"
              alt=""/>
            </div>
          }
          </div>
        }
      </div>
    );
  }
}

export default EventCard_large;
