import React, { Component } from 'react';
import { cn } from '@bem-react/classname';

// Libraries
const classNames = require('classnames');

const card = cn('Card');

export const Card = (w, props) => {
  const headerClass = classNames({
    [card('HeaderWrap')]: true,
    'critical': props.type === 'critical',
    'have-description': props.description
  });
  return (
    <div className={card({ small: true })}>
      <div className={headerClass}>
        <div className={card('Header', { small: true })}>
          <img className={card('Logo', { small: true })} src={`./assets/${props.icon}.svg`} alt="" />
          <p className={card('Title', { small: true })}>{props.title}</p>
        </div>
        <div className={card('Status', { small: true })}>
          <p className={card('Source', { small: true }) + ' status-text'}>{props.source}</p>
          <p className={card('Time', { small: true }) + ' status-text'}>{props.time}</p>
        </div>
      </div>
      {
        props.description &&
        <div className={card('Description', { small: true })}>
          <p className={card('DescriptionParagraph', { small: true })}>{props.description}</p>
        </div>
      }
    </div>
  );
}

