import React from 'react';
import { Row, Col } from 'antd';
import PropTypes from 'prop-types';
import Hero from '@/components/hero';
import styles from './index.less';
import MyEye from '@/assets/images/MyEye.png';
import { HERO_ITEMS } from '@/settings/hero/HeroItems';

const Home = () => {
  const { home } = HERO_ITEMS;

  return (
    <Row className={styles.homeMainRow}>
      <Col className={styles.imgCol} xs={24} md={8}>
        <img className={styles.eyeImg} alt="my eye :)" src={MyEye} />
      </Col>
      <Col
        xs={24}
        md={16}
        // style={{padding: '200 200 200 0'}}
      >
        <Hero title={home.title} subTitle={home.subTitle} text={home.text} />
      </Col>
    </Row>
  );
};

Home.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  text: PropTypes.string,
};

export default Home;
