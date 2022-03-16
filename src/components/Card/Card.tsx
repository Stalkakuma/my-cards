import {FC} from 'react';
import {DataTypes} from 'utils/types';

import {ReactComponent as Pin} from '../../assets/map.svg';
import {ReactComponent as Facebook} from '../../assets/facebook.svg';
import {ReactComponent as IG} from '../../assets/IG.svg';
import {ReactComponent as Github} from '../../assets/github.svg';
import {ReactComponent as Linkedin} from '../../assets/linkedin.svg';

import './card.scss';

interface DataProp {
  cardData: DataTypes;
}

export const Card: FC<DataProp> = ({cardData}) => {
  return (
    <div className='card'>
      <div className='card__photo'>
        <img src={`${cardData.photo}`} alt='user profile' className='card__image' />
      </div>
      <h2 className='card__full-name'>
        {cardData.name}&nbsp;
        {cardData.surname}
      </h2>
      <p>
        {cardData.occupation}&nbsp;from&nbsp;<b>{cardData.POB}</b>
      </p>
      <div className='card__location-row'>
        <Pin />
        <p>
          <b>{cardData.location}</b>
        </p>
      </div>
      <div className='card__social-media'>
        <a href={cardData.media.facebook} target='_blank' rel='noreferrer'>
          <Facebook className='card__icon' />
        </a>
        <a href={cardData.media.instagram} target='_blank' rel='noreferrer'>
          <IG className='card__icon' />
        </a>
        <a href={cardData.media.github} target='_blank' rel='noreferrer'>
          <Github className='card__icon' />
        </a>
        <a href={cardData.media.linkedin} target='_blank' rel='noreferrer'>
          <Linkedin className='card__icon' />
        </a>
      </div>
      <h2>Card</h2>
      <div className='card__details'>Details</div>
    </div>
  );
};
