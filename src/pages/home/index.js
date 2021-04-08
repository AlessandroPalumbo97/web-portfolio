import React from 'react';
import { Row, Col } from 'antd';
import HomeCarousel from '@/components/homeCarousel';
import PropTypes from 'prop-types';
import MainLayout from '@/layouts/main';

const Home = (props) => {
  return (
    <Row>
      <Col lg={24} xl={24}>
        <div>
          <HomeCarousel />
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
