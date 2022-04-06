import {FC, useState} from 'react';
import {DataTypes} from 'utils/types';
import classNames from 'classnames';

import doviliukas from '../../assets/doviliukas.jpg';
import juozapelis from '../../assets/juozapelis.jpg';
import jeli from '../../assets/jeli.jpg';
import {ReactComponent as Pin} from '../../assets/map.svg';
import {ReactComponent as Facebook} from '../../assets/facebook.svg';
import {ReactComponent as IG} from '../../assets/IG.svg';
import {ReactComponent as Github} from '../../assets/github.svg';
import {ReactComponent as Linkedin} from '../../assets/linkedin.svg';
import './card.scss';

interface DataProp {
  cardData: DataTypes;
  handleApproval: () => void;
}

export const Card: FC<DataProp> = ({cardData, handleApproval}) => {
  const [messageOpened, setMessageOpened] = useState(false);
  console.log(messageOpened);
  const toggleMessage = () => {
    setMessageOpened((prev) => !prev);
  };
  return (
    <div className='wrapper'>
      <div className='card'>
        <div className={classNames('overlay', {'overlay--hidden': !messageOpened})}>
          <form className='overlay__form'>
            <div className='overlay__form-container'>
              <textarea className='overlay__text' placeholder='Say something...'></textarea>
            </div>
            <div className='card__button-row'>
              <button className='card__button card__button--blue'>Send</button>
              <button className='card__button card__button--orange' onClick={() => toggleMessage()}>
                Cancel
              </button>
            </div>
          </form>
        </div>
        <div className='card__photo'>
          {cardData.photo === 'juozapelis' && <img src={juozapelis} alt='user profile' className='card__image' />}
          {cardData.photo === 'doviliukas' && <img src={doviliukas} alt='user profile' className='card__image' />}
          {cardData.photo === 'jeli' && <img src={jeli} alt='user profile' className='card__image' />}
        </div>
        <div className='card__content'>
          <div className='card__details'>
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
          </div>

          <div className='card__social-media'>
            {cardData.media.facebook && (
              <a href={cardData.media.facebook} target='_blank' rel='noreferrer'>
                <Facebook className='card__icon' />
              </a>
            )}
            {cardData.media.instagram && (
              <a href={cardData.media.instagram} target='_blank' rel='noreferrer'>
                <IG className='card__icon' />
              </a>
            )}
            {cardData.media.github && (
              <a href={cardData.media.github} target='_blank' rel='noreferrer'>
                <Github className='card__icon' />
              </a>
            )}
            {cardData.media.linkedin && (
              <a href={cardData.media.linkedin} target='_blank' rel='noreferrer'>
                <Linkedin className='card__icon' />
              </a>
            )}
          </div>
        </div>

        <div className='card__button-row'>
          <button onClick={() => toggleMessage()} className='card__button card__button--blue'>
            Message
          </button>
          <button
            className={classNames('card__button card__button--orange', {
              'card__button card__button--green': cardData.approved,
            })}
            onClick={() => handleApproval()}
          >{`Approve${cardData.approved ? `d` : ''}`}</button>
        </div>
      </div>
    </div>
  );
};
