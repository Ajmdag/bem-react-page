import React, { Component } from 'react';
import { cn } from '@bem-react/classname';

// Libraries
const classNames = require('classnames');

const card = cn('Card');

class EventCard_small extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
  }

  render() {
    const headerClass = classNames({
      [card('HeaderWrap', { small: true })]: true,
      'critical': this.props.type === 'critical',
      'have-description': this.props.description
    });
    return (
      <div className={card({ small: true })}>
        <div className={headerClass}>
          <div className={card('Header', { small: true })}>
            <img className={card('Logo', { small: true })} src={`./assets/${this.props.icon}.svg`} alt="" />
            <p className={card('Title', { small: true })}>{this.props.title}</p>
          </div>
          <div className={card('Status', { small: true })}>
            <p className={card('Source', { small: true }) + ' status-text'}>{this.props.source}</p>
            <p className={card('Time', { small: true }) + ' status-text'}>{this.props.time}</p>
          </div>
        </div>
        {
          this.props.description &&
          <div className={card('Description', { small: true })}>
            <p className={card('DescriptionParagraph', { small: true })}>{this.props.description}</p>
          </div>
        }
      </div >
    );
  }
}

export default EventCard_small;
