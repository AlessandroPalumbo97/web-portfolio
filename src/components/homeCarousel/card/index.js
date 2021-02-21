import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.less';
import CardInfo from '@/components/homeCarousel/card/cardInfo';

function Card(props) {
  const { item, click } = props;
  const { title, subTitle, imgSrc, selected, link, downloadable } = item;

  return (
    <div className={styles.cardWrapper} onClick={(e) => click(item)}>
      <img className={styles.cardImage} src={imgSrc} alt={imgSrc} />
      {selected && (
        <CardInfo
          title={title}
          subTitle={subTitle}
          link={link}
          downloadable={downloadable}
        />
      )}
    </div>
  );
}

Card.propTypes = {
  item: PropTypes.object,
  click: PropTypes.any,
};

export default Card;
