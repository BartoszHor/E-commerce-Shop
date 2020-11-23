import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import Stars from '../Stars/Stars';

import styles from './PromoProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faExchangeAlt,
  faShoppingBasket,
  faEye,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';

class PromoProductBox extends React.Component {
  render() {
    const {
      id,
      name,
      price,
      olderPrice,
      image,
      imageAlt,
      handleStar,
      handleStyle,
      starChange,
      stars,
    } = this.props;
    return (
      <div className={styles.root}>
        <div className={`${styles.photo}`}>
          <img src={image} alt={imageAlt} />
          <div className={styles.buttons}>
            <Button variant='small' className={styles.btnAddToCart}>
              <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
            </Button>
          </div>
          <div className={styles.timersContainer}>
            <div className={styles.timerContainer}>
              <div className={styles.timerDescription}>
                <p>25</p>
                <p>days</p>
              </div>
            </div>
            <div className={styles.timerContainer}>
              <div className={styles.timerDescription}>
                <p>10</p>
                <p>hrs</p>
              </div>
            </div>
            <div className={styles.timerContainer}>
              <div className={styles.timerDescription}>
                <p>25</p>
                <p>min</p>
              </div>
            </div>
            <div className={styles.timerContainer}>
              <div className={styles.timerDescription}>
                <p>25</p>
                <p>sec</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.content}>
          <h5>{name}</h5>
          <Stars
            rate={stars}
            handleStar={handleStar}
            id={id}
            handleStyle={handleStyle}
            starChange={starChange}
          />
        </div>
        <div className={styles.line}></div>
        <div className={styles.actions}>
          <div className={styles.outlines}>
            <Button variant='outline'>
              <FontAwesomeIcon icon={faEye}>Observe</FontAwesomeIcon>
            </Button>
            <Button variant='outline'>
              <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
            </Button>
            <Button variant='outline'>
              <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
            </Button>
          </div>
          <div className={styles.olderPrice}>
            <span className='text-right'>{olderPrice}</span>
          </div>
          <div className={styles.price}>
            <Button noHover variant='small'>
              <h5>$ {price}</h5>
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

PromoProductBox.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.string,
  olderPrice: PropTypes.string,
  image: PropTypes.string,
  imageAlt: PropTypes.string,
  handleStar: PropTypes.func,
  handleStyle: PropTypes.func,
  starChange: PropTypes.func,
  stars: PropTypes.number,
};

export default PromoProductBox;
