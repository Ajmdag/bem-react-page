import React, { Component } from 'react';
import { cn } from '@bem-react/classname';
import { withBemMod } from '@bem-react/core'

// Libraries
const classNames = require('classnames');

const card = cn('Card');
const player = cn('Player');

const Card_medium = (w, props) => {
  const headerClass = classNames({
    [card('HeaderWrap', { medium: true })]: true,
    'critical': props.type === 'critical',
    'have-description': props.description
  });
  return (
    <div className={card({ medium: true })} >
      <div className={headerClass}>
        <div className={card('Header', { medium: true })}>
          <img className={card('Logo', { medium: true })} src={`./assets/${props.icon}.svg`} alt="" />
          <p className={card('Title', { medium: true })}>{props.title}</p>
        </div>
        <div className={card('Status', { medium: true })}>
          <p className={card('Source', { medium: true }) + 'status-text'}>{props.source}</p>
          <p className={card('Time', { medium: true }) + 'status-text'}>{props.time}</p>
        </div>
      </div>
      {
        props.description &&
        <div className={card('Description', { medium: true })}>
          <p className={card('DescriptionParagraph', { medium: true })}>{props.description}</p>
          {
            props.data && props.data.temperature && props.data.humidity &&
            <div className={card('Data', { air: true })}>
              <p>Температура: <b>{props.data.temperature} С</b></p>
              <p>Влажность: <b>{props.data.humidity} %</b></p>
            </div>
          }
          {
            props.data && props.data.buttons &&
            <div className={card('DataButtonsContainer')}>
              <div className={card('DataButton', { buttonYes: true })}>Да</div>
              <div className={card('DataButton', { buttonNo: true })}>Нет</div>
            </div>
          }
          {
            props.data && props.data.artist &&
            <div className={card('DataMusicPlayer')}>
              <div className={card('Player')}>
                <div className={player()}>
                  <div className={player('Header')}>
                    <div className={player('LogoContainer')}>
                      <img src={props.data.albumcover} alt="" className={player('Logo')} />
                    </div>
                    <div className={player('Trackinfo')}>
                      <p className={player('Name')}>{props.data.artist} - {props.data.track.name}</p>
                      <div className={player('Track')}>
                        <div className={player('Trackline')}></div>
                        <p className={player('Time')}>{props.data.track.length}</p>
                      </div>
                    </div>
                  </div>
                  <div className={player('Controls')}>
                    <img src="./assets/prev.svg" alt="" className={player('Control', { left: true })} />
                    <img src="./assets/prev.svg" alt="" className={player('Control', { right: true })} />
                    <div className={player('Volume')}></div>
                    <p className={player('VolumePercent')}>{props.data.volume} %</p>
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

export const cardMedium = withBemMod(
  'some',
  { size: 'm' },
  Card_medium
)