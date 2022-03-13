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
      <Col className={styles.imgCol} lg={12}>
        <img alt="my eye :)" src={MyEye} />
      </Col>
      <Col lg={12}>
        <Hero title={home.title} />
        <div style={{ padding: 20 }}>
          <p>
            My Name is Alessandro Palumbo and I was born in Milan in 1997.
            Friends used to call me Alex, or just “P”. I started play Doom on
            Windows97 when I was four and fell In love with it. Few years later,
            I started watching my daddy programming Java. So my curiosity for
            videogames and technology grew up year by year.
          </p>
          <p>
            In July 2020 I got my degree from European Institute of Design of
            Milan in Media Design with a mark of 109/110. There, I started
            showing interest in design, photography, videoediting, 3D print and
            a bit of robotics.
          </p>
          <p>
            From November 2020 I am employed as a software developer at FME
            Education
          </p>
          <p>
            I made a lot of different experiences through these years of life,
            but I still feel like my journey is at the beginning :).
          </p>
          <p>
            For any other information, to ask for a collaboration, or just to
            have a conversation, don’t hesitate to write me at{' '}
            <a href="mailto:mr.alessandropalumbo@gmail.com">
              mr.alessandropalumbo@gmail.com.
            </a>
          </p>
        </div>
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
