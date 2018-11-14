import React, { Component } from 'react';
import { cn } from '@bem-react/classname';

// Libraries
const classNames = require('classnames');

const card = cn('Card');
const player = cn('Player');

class EventCard_medium extends Component {
  render() {
    const headerClass = classNames({
      [card('HeaderWrap', { medium: true })]: true,
      'critical': this.props.type === 'critical',
      'have-description': this.props.description
    });
    return (
      <div className={card({ medium: true })} >
        <div className={headerClass}>
          <div className={card('Header', { medium: true })}>
            <img className={card('Logo', { medium: true })} src={`./assets/${this.props.icon}.svg`} alt="" />
            <p className={card('Title', { medium: true })}>{this.props.title}</p>
          </div>
          <div className={card('Status', { medium: true })}>
            <p className={card('Source', { medium: true }) + 'status-text'}>{this.props.source}</p>
            <p className={card('Time', { medium: true }) + 'status-text'}>{this.props.time}</p>
          </div>
        </div>
        {
          this.props.description &&
          <div className={card('Description', { medium: true })}>
            <p className={card('DescriptionParagraph', { medium: true })}>{this.props.description}</p>
            {
              this.props.data && this.props.data.temperature && this.props.data.humidity &&
              <div className={card('Data', { air: true })}>
                <p>{`Температура: ${this.props.data.temperature} С`}</p>
                <p>{`Влажность: ${this.props.data.humidity} %`}</p>
              </div>
            }
            {
              this.props.data && this.props.data.buttons &&
              <div className={card('DataButtonsContainer')}>
                <div className={card('DataButton', { buttonYes: true })}>Да</div>
                <div className={card('DataButton', { buttonNo: true })}>Нет</div>
              </div>
            }
            {
              this.props.data && this.props.data.artist &&
              <div className={card('DataMusicPlayer')}>
                <div className={card('Player')}>
                  <div className={player()}>
                    <div className={player('Header')}>
                      <div className={player('LogoContainer')}>
                        <img src={this.props.data.albumcover} alt="" className={player('Logo')} />
                      </div>
                      <div className={player('Trackinfo')}>
                        <p className={player('Name')}>{this.props.data.artist} - {this.props.data.track.name}</p>
                        <div className={player('Track')}>
                          <div className={player('Trackline')}></div>
                          <p className={player('Time')}>{this.props.data.track.length}</p>
                        </div>
                      </div>
                    </div>
                    <div className={player('Controls')}>
                      <img src="./assets/prev.svg" alt="" className={player('Control', { left: true })} />
                      <img src="./assets/prev.svg" alt="" className={player('Control', { right: true })} />
                      <div className={player('Volume')}></div>
                      <p className={player('VolumePercent')}>{this.props.data.volume} %</p>
                    </div>
                  </div>
                </div>
              </div>
            }
          </div>
        }
      </div >
    );
  }
}

export default EventCard_medium;
