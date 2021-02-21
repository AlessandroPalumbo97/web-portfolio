import React from 'react';
import { Row, Col } from 'antd';
import HomeCarousel from '@/components/homeCarousel';
import PropTypes from 'prop-types';
import Hero from '@/components/hero';

const Index = (props) => {
  const title = 'Alessandro Palumbo';
  const subTitle = 'Welcome to my crazy place 🤪';
  const text =
    'Check out my projects below, contact me, or just have fun playing Salvinification';

  return (
    <Row>
      <Col lg={24} xl={24}>
        <div>
          <Hero title={title} subTitle={subTitle} text={text} />
          <HomeCarousel />
        </div>
      </Col>
    </Row>
  );
};

Index.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  text: PropTypes.string,
};

export default Index;
