import React from 'react';
import styles from './index.less';
import PropTypes from 'prop-types';

const AboutPage = () => {
  return <div className={styles.aboutWrapper}></div>;
};

AboutPage.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  photo: PropTypes.any,
};

export default AboutPage;
