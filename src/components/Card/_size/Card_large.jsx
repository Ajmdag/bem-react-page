import React, { Component } from 'react';
import { cn } from '@bem-react/classname';
import { withBemMod } from '@bem-react/core'

// Libraries
const classNames = require('classnames');

const card = cn('Card');

const Card_large = (w, props) => {
  const headerClass = classNames({
    [card('HeaderWrap', { large: true })]: true,
    'critical': props.type === 'critical',
    'have-description': props.description
  });
  return (
    <div className={card({ large: true })}>
      <div className={headerClass}>
        <div className={card('Header', { large: true })}>
          <img className={card('Logo', { large: true })} src={`./assets/${props.icon}.svg`} alt="" />
          <p className={card('Title', { large: true })}>{props.title}</p>
        </div>
        <div className={card('Status', { large: true })}>
          <p className={card('Source', { large: true })}>{props.source}</p>
          <p className={card('Time', { large: true })}>{props.time}</p>
        </div>
      </div>
      {
        props.description &&
        <div className={card('Description', { large: true })}>
          <p className={card('DescriptionParagraph', { large: true })}>{props.description}</p>
          {
            props.data.type === 'graph' &&
            <div className={card('ImageContainer')}>
              <img src="./assets/richdata.svg" className={card('Image')} alt="" />
            </div>
          }
          {
          props.data.image &&
          <div className={card('ImageContainer')} id="hoover-container">
          <img className={card('Image')}
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

export const cardLarge = withBemMod(
  'asome',
  { size: 'l' },
  Card_large
)