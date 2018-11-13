import React, { Component } from 'react';

// Libraries
const classNames = require('classnames');

class EventCard_medium extends Component {
  render() {
    const headerClass = classNames({
      'card__header-wrap card__header-wrap--small': true,
      'critical': this.props.type === 'critical',
      'have-description': this.props.description
    });
    return (
      <div className="card card--medium">
        <div className={headerClass}>
          <div className="card__header card__header--medium"><img className="card__logo card__logo--medium" src={`./assets/${this.props.icon}.svg`} alt="" />
            <p className="card__title card__title--medium">{this.props.title}</p>
          </div>
          <div className="card__status card__status--medium">
            <p className="status-text card__source card__source--medium">{this.props.source}</p>
            <p className="status-text card__time card__time--medium">{this.props.time}</p>
          </div>
        </div>
        {
          this.props.description &&
          <div className="card__description card__description--medium">
            <p className="card__description-paragraph card__description-paragraph--medium">{this.props.description}</p>
            {
              this.props.data && this.props.data.temperature && this.props.data.humidity &&
              <div className="card__data card__data--air">
                <p>{`Температура: <b>${<b>this.props.data.temperature</b>} С<b>`}</p>
                <p>{`Влажность: <b>${this.props.data.humidity} %<b>`}</p>
              </div>
            }
            {
              this.props.data && this.props.data.buttons &&
              <div className="card__data-buttons-container">
                <div className="card__data-button card__data--button-yes">Да</div>
                <div className="card__data-button card__data--button-no">Нет</div>
              </div>
            }
            {
              this.props.data && this.props.data.artist &&
              <div className="card__data-music-player">
                <div className="card__player">
                  <div className="player">
                    <div className="player__header">
                      <div className="player__logo-container">
                        <img src={this.props.data.albumcover} alt="" className="player__logo" />
                      </div>
                      <div className="player__trackinfo">
                        <p className="player__name">{this.props.data.artist} - {this.props.data.track.name}</p>
                        <div className="player__track">
                          <div className="player__trackline"></div>
                          <p className="player__time">{this.props.data.track.length}</p>
                        </div>
                      </div>
                    </div>
                    <div className="player__controls">
                      <img src="./assets/prev.svg" alt="" className="player__control player__control--left" />
                      <img src="./assets/prev.svg" alt="" className="player__control player__control--right" />
                      <div className="player__volume"></div>
                      <p className="player__volume-percent">{this.props.data.volume} %</p>
                    </div>
                  </div>
                </div>
              </div>
            }
          </div>
        }
      </div>
    );
  }
}

export default EventCard_medium;
