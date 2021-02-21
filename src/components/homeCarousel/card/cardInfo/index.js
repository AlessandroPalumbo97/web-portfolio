import React from 'react';
import { Link } from 'umi';
import PropTypes from 'prop-types';
import styles from './index.less';
import { useSpring, animated } from 'react-spring';

const CardInfo = (props) => {
  const style = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });

  return (
    <animated.div className={styles.cardInfo} style={style}>
      <p className={styles.cardTitle}>{props.title}</p>
      <p className={styles.cardSubTitle}>{props.subTitle}</p>
      <p className={styles.cardLink}>
        {props.downloadable ? (
          <Link to={props.link} target="_blank" rel="noopener noreferrer">
            Download for Windows
          </Link>
        ) : (
          <Link to={props.link} rel="noopener noreferrer">
            View
          </Link>
        )}
      </p>
    </animated.div>
  );
};

CardInfo.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  downloadable: PropTypes.bool,
  link: PropTypes.string,
};

export default CardInfo;
