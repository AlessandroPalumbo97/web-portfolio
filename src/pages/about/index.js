import React from 'react';
import { Row } from 'antd';
import styles from './index.less';
import PropTypes from 'prop-types';

const AboutPage = () => {
  return (
    <div>
      <Row className={styles.container}></Row>
    </div>
  );
};

AboutPage.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  photo: PropTypes.any,
};

export default AboutPage;
